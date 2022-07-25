import useDarkMode from '../hooks/useDarkMode';

function DarkMode() {
  const [enabled, setEnabled] = useDarkMode();

  return (
    <div>
      <button onClick={() => setEnabled(!enabled)} className=' bg-red-500 p-2'>
        {enabled ? 'Dark' : 'Light'}
      </button>
    </div>
  );
}

export default DarkMode;
