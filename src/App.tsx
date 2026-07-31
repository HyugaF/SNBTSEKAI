import { useState } from 'react';
import Home from '@/pages/home';
import { IntroAnimation } from '@/components/intro-animation';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <IntroAnimation onComplete={() => setIntroComplete(true)} />
      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      >
        <Home />
      </div>
    </>
  );
}

export default App;
