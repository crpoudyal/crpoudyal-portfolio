import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6 px-4 pt-32 pb-20">
      <div className="w-16 h-16 rounded-3xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center text-3xl font-extrabold font-mono">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--foreground)]">
        Page Not Found
      </h1>
      <p className="text-[var(--muted)] text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary flex items-center gap-2">
        <ArrowLeft size={18} />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
