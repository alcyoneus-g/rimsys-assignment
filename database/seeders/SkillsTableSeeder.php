<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Skill;

class SkillsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Skill::truncate();
        
        Skill::create([
            'label' => 'HTML',
            'value' => 99
        ]);

        Skill::create([
            'label' => 'CSS',
            'value' => 95
        ]);
    }
}
