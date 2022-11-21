<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class LoginController extends Controller
{
    public function __construct()
    {
        // Make sure user is not currently logged in.
    }

    public function index($guard)
    {
        return Inertia::render('Pages/Auth/Login', [
            'guard' => $guard
        ]);
    }

    public function doLogin($guard)
    {
        $credentials = request()->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if (
            auth()
                ->guard($guard)
                ->attempt($credentials)
        ) {
            request()->session()->regenerate();

            return response()
                ->json([
                    'guard' => $guard
                ]);
        }

        return response()->json(false);
    }
}
