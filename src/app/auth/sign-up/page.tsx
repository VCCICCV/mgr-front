'use client';
import AuthForm from '@/components/auth/AuthForm'
import { signUp } from '@/lib/actions/authAction'

const page = () => {
    return (
        <AuthForm
            type="SIGN_UP"
            defaultValues={{
                identifier: "",
                password: "",
            }}
            onSubmit={signUp}
        />
    )
}

export default page
