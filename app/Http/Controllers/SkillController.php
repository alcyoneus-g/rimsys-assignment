<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SkillController extends Controller
{
    public function index()
    {
        return Skill::all();
    }

    public function store(Request $request)
    {
        $skill = Skill::create($request->all());

        return response()->json($skill, 201);
    }

    public function update(Request $request, $id)
    {
        $skill = Skill::findOrFail($id);
        $skill->update($request->all());

        return $skill;
    }

    public function delete(Request $request, $id)
    {
        $skill = Skill::findOrFail($id);
        $skill->delete();

        return 204;
    }
}
