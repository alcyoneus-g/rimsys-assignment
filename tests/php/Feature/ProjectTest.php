<?php

namespace Tests\Feature;

use App\Models\Project;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;

class ProjectTest extends TestCase
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
     * Test getting projects
     *
     * @return void
     */
    public function testGetProjects()
    {
        $response = $this->get('/projects');

        $response->assertJsonCount(2);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            '*' => [
                'id',
                'src',
                'to',
                'created_at',
                'updated_at'
            ]
        ]);
    }

    /**
     * Test storing new project in database
     *
     * @return void
     */
    public function testStoreProject()
    {
        $response = $this->post('/projects', [
            'src' => 'https://unsplash.it/536/285',
            'to' => 'facebook.com'
        ]);

        $response->assertStatus(201);
        $response->assertJson([
            'id' => 3,
            'src' => 'https://unsplash.it/536/285',
            'to' => 'facebook.com',
        ]);
    }

    /**
     * Test updating existing project
     *
     * @return void
     */
    public function testUpdateProject()
    {
        $id = 2;
        $response = $this->put("/projects/$id", [
            'to' => 'instagram.com'
        ]);

        $response->assertJson([
            'id' => 2,
            'to' => 'instagram.com'
        ]);
    }

    /**
     * Test deleting a project
     *
     * @return void
     */
    public function testDeleteProject()
    {
        $id = 2;
        $response = $this->delete("/projects/$id");

        $response->assertOk();

        // check database to see if it's deleted
        $this->assertEquals(1, Project::all()->count());

        $project = Project::all()->find($id);
        $this->assertNull($project);
    }
}
