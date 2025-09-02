"use client";

export default function Error({ error, reset }) {
  return (
    <div className='global-error'>
      <div>Der opstod en fejl.</div>
      {error?.message && (
        <div className='global-error__message'>{error.message}</div>
      )}
      {reset && (
        <button className='global-error__button' onClick={reset}>
          Prøv igen
        </button>
      )}
    </div>
  );
}
