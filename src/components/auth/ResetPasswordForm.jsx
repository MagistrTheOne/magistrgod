import { useState } from 'react';

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Пожалуйста, введите корректный email');
      return;
    }
    setError('');
    // Логика для сброса пароля (мок)
    console.log('Запрос на восстановление пароля для: ', email);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-purple-300">Восстановить пароль</h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@dawverse.com"
          className="w-full px-4 py-2 mt-1 rounded bg-black text-white placeholder-gray-500 border border-purple-800/30 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-500 py-2 rounded-md hover:brightness-110 transition font-semibold"
      >
        Восстановить
      </button>
    </form>
  );
};

export default ResetPasswordForm;
