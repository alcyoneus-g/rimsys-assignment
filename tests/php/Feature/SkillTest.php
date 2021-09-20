<?php

namespace Tests\Feature;

use App\Models\Skill;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;

class SkillTest extends TestCase
{
    /**
     * Seed db when running tests
     */
    public function setUp(): void
    {
        parent::setUp();
        Artisan::call("db:seed");
    }

    /**
     * Test getting skills
     *
     * @return void
     */
    public function testGetSkills()
    {
        $response = $this->get('/skills');

        $response->assertJsonCount(2);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => [
                'id',
                'label',
                'value',
                'created_at',
                'updated_at'
            ]
        ]);
    }

    /**
     * Test adding new skill
     *
     * @return void
     */
    public function testStoreSkill()
    {
        $response = $this->post('/skills', [
            'label' => 'PHP',
            'value' => 91
        ]);

        $response->assertStatus(201);
        $response->assertJson([
            'id' => 3,
            'label' => 'PHP',
            'value' => 91,
        ]);
    }

    /**
     * Test updating existing skill
     *
     * @return void
     */
    public function testUpdateSkill()
    {
        $id = 2;
        $response = $this->put("/skills/$id", [
            'value' => 98
        ]);

        $response->assertJson([
            'id' => 2,
            'label' => 'CSS',
            'value' => 98
        ]);
    }

    /**
     * Test deleting a skill
     *
     * @return void
     */
    public function testDeleteSkill()
    {
        $id = 1;
        $response = $this->delete("/skills/$id");

        $response->assertOk();

        // check database to see if it's deleted
        $this->assertEquals(1, Skill::all()->count());

        $skill = Skill::all()->find($id);
        $this->assertNull($skill);
    }
}
