import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Base',
    price: '$10 / месяц',
    credits: '150 AI-кредитов',
    features: ['Базовый набор функций', 'Доступ к 1 AI-инструменту'],
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$35 / месяц',
    credits: '300 AI-кредитов',
    features: ['Доступ к 2 AI-инструментам', 'Расширенный функционал', 'Премиум подгрузка'],
    highlight: true,
  },
  {
    name: 'GodMode',
    price: '$300 / месяц',
    credits: '3000 AI-кредитов',
    features: ['20 проектов в облаке', '4 AI-инструмента', 'Премиум обслуживание'],
    highlight: false,
  },
];

const Price = () => {
  const navigate = useNavigate();

  return (
    <section
      id="price"
      className="w-full bg-secondary text-white min-h-screen py-24 px-6 scroll-mt-28"
    >
      <motion.div
        className="w-full max-w-[1600px] mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold mb-14 tracking-tight bg-gradient-to-r from-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
          Тарифы
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 md:px-0">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`p-8 rounded-xl border border-purple-600/30 shadow-lg bg-primary transition-all
                ${plan.highlight ? 'scale-105 ring-2 ring-purple-500/50' : ''}
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
            >
              <h3 className="text-2xl font-bold text-purple-300 mb-3">{plan.name}</h3>
              <p className="text-xl font-semibold mb-1">{plan.price}</p>
              <p className="text-sm text-gray-400 mb-6">{plan.credits}</p>

              <ul className="text-sm text-left space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-purple-400">✔</span> {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('/login')}
                className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-500 py-3 rounded-md hover:brightness-110 transition font-semibold"
              >
                Выбрать
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Price;
