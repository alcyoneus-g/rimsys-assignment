<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Project::truncate();

        Project::create([
            'src' => 'https://unsplash.it/536/285',
            'to' => 'google.com'
        ]);

        Project::create([
            'src' => 'https://unsplash.it/536/285',
            'to' => 'linkedin.com'
        ]);
    }
}
