<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Get list of all projects
     *
     * @return Project[]|Collection
     */
    public function index()
    {
        return Project::all();
    }

    /**
     * Update a project by id
     *
     * @param Request $request
     * @param $id
     *
     * @return Project
     */
    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        $project->update($request->all());

        return $project;
    }

    /**
     * Add a new project
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $project = Project::create($request->all());

        return response()->json($project, 201);
    }

    /**
     * Delete project by id
     *
     * @param Request $request
     * @param $id
     * @return int
     */
    public function delete(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return 204;
    }
}
