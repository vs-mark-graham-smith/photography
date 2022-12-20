<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\UpsertUser;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Pages/Admin/Users/List');
    }

    public function fetchMany()
    {
        return app(User::class)
            ->query()
            ->when(
                request()->get('search'),
                static function ($modelQuery, $searchInput) {
                    $modelQuery
                        ->where('name', 'LIKE', "%{$searchInput}%")
                        ->orWhere('email', 'LIKE', "%{$searchInput}%");
                }
            )
            ->paginate();
    }

    public function viewUpsertUser(User $user = null)
    {
        return Inertia::render('Pages/Admin/Users/Upsert', [
            'user' => $user
        ]);
    }

    public function doUpsertUser(UpsertUser $request, User $user)
    {
        return $request
            ->doUpsert($user);
    }
}
