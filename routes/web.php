<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use App\Http\Controllers\Auth\LoginController;

use App\Http\Controllers\Admin\{
    DashboardController as AdminDashboardController,
    UserController as AdminUserController
};

/*
 * Authorisation
 */

Route::name('auth.')
    ->prefix('auth')
    ->middleware('guest:admin,user')
    ->group(static function () {
        Route::controller(LoginController::class)
            ->group(static function () {
                Route::get('{guard}/login', 'index');
                Route::post('{guard}/login', 'doLogin');
            });
    });

Route::name('admin.')
    ->prefix('admin')
    ->middleware('auth.admin')
    ->group(static function () {

        /**
         * Dashboard
         */
        Route::prefix('dashboard')
            ->controller(AdminDashboardController::class)
            ->group(static function () {
                Route::get('/', 'index');
            });

        /**
         * Users
         */
        Route::prefix('users')
            ->controller(AdminUserController::class)
            ->group(static function () {
                Route::get('/', 'index');
                Route::post('/', 'fetchMany');

                Route::get('/upsert/{user?}', 'viewUpsertUser');
                Route::post('/upsert/{user?}', 'doUpsertUser');
            });
    });

/**
 * Fallback Route
 *
 * This just redirects to the user login for now
 */
Route::fallback(static function () {
    return redirect('/auth/user/login');
});
