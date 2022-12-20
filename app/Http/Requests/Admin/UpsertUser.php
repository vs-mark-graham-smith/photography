<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\RequiredIf;
use App\Models\User;

class UpsertUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->guard('admin')->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'first_name' => 'required',
            'surname' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => [
                new RequiredIf(! $this->route()->parameter('user')),
                'confirmed'
            ]       
         ];
    }

    public function doUpsert(User $user)
    {
        return response()
            ->json(
                tap($user, function ($user) {
                    $user->fill([
                        'first_name' => $this->input('first_name'),
                        'surname' => $this->input('surname'),
                        'email' => $this->input('email'),
                    ]);

                    if ($this->input('password')) {
                        $user->password = bcrypt($this->input('password'));
                    }

                    return $user->save();
                })->refresh()
            );
    }
}
