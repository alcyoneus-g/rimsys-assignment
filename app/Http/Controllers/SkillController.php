<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    /**
     * Get list of skills
     *
     * @return Skill[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return Skill::all();
    }

    /**
     * Add a new skill
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $skill = Skill::create($request->all());

        return response()->json($skill, 201);
    }

    /**
     * Update a skill by id
     *
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function update(Request $request, $id)
    {
        $skill = Skill::findOrFail($id);
        $skill->update($request->all());

        return $skill;
    }

    /**
     * Delete a skill by id
     *
     * @param Request $request
     * @param $id
     * @return int
     */
    public function delete(Request $request, $id)
    {
        $skill = Skill::findOrFail($id);
        $skill->delete();

        return 204;
    }
}
