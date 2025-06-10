import { useSearchParams } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import ResetPasswordForm from '../components/auth/ResetPasswordForm';

export default function LoginPage() {
  const [params] = useSearchParams();
  const mode = params.get('mode') || 'login'; // Получаем mode из URL (login | signup | reset)

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-secondary p-8 rounded-lg shadow-lg w-full max-w-md space-y-4">
        {mode === 'login' && <LoginForm />}
        {mode === 'signup' && <SignupForm />}
        {mode === 'reset' && <ResetPasswordForm />}

        <div className="text-sm text-center text-gray-400 space-y-2">
          {mode !== 'login' && (
            <p onClick={() => window.location.search = '?mode=login'} className="cursor-pointer hover:text-purple-400">
              Уже есть аккаунт? Войдите
            </p>
          )}

          {mode !== 'signup' && (
            <p onClick={() => window.location.search = '?mode=signup'} className="cursor-pointer hover:text-purple-400">
              Нет аккаунта? Создайте
            </p>
          )}

          {mode !== 'reset' && (
            <p onClick={() => window.location.search = '?mode=reset'} className="cursor-pointer hover:text-purple-400">
              Забыли пароль?
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
