import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

export interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export default function Lesson({
  title,
  slug,
  availableAt,
  type,
}: LessonProps) {
  const isLessonAvailable = Boolean(new Date() > availableAt);
  const params = useParams<{ slug: string }>();

  const isActiveLesson = params.slug === slug;

  function formatDate() {
    const weekday = new Intl.DateTimeFormat('pt-BR', { weekday: 'long'}).format(availableAt)
    const date = new Intl.DateTimeFormat('pt-BR', { month: 'long', day: 'numeric'}).format(availableAt)
    const time = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit'}).format(availableAt)
  
    const dateFormatted = `${(weekday[0].toUpperCase() + weekday.slice(1)).replace('-feira', '')} • ${date} • ${time.replace(':', 'h')}`

    return dateFormatted;
  }

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">
        {formatDate()}
        <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : ''}`}>
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span className={`text-sm text-blue-500 font-medium flex items-center gap-2 ${isActiveLesson ? 'text-white' : ''}`}>
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
            ) : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                <Lock size={20} />
                Em breve
              </span>
            )}
            <span className={`text-xs rounded py-[0.125rem] px-2 text-white border font-bold ${isActiveLesson ? 'border-white' : 'border-green-300'}`}>
              {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
            </span>
          </header>
          <strong className={`mt-5 block ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>{title}</strong>
        </div>
      </span>
    </Link>
  );
}
