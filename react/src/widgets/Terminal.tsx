import {useState, KeyboardEvent, useRef, useEffect} from 'react';
import { terminal, welcomeTerminal } from '../feature/terminal.ts'
export default function Terminal() {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);
  const handleCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    let response = terminal(trimmedCommand) || `Command not found: ${trimmedCommand}. Type 'help' for available commands.`;

    if (response === 'CLEAR_TERMINAL') {
      setCommandHistory([]);
      return;
    }

    setCommandHistory(prev => [
      ...prev,
      `$ ${command}`,
      ...response.split('\n')
    ]);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand);
      setCurrentCommand('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-[#2d2d2d] rounded-lg shadow-2xl overflow-hidden">
      <div className="bg-gray-200 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="ml-4 text-sm text-gray-600 font-mono">
          hanjiwoong@profile ~
        </div>
      </div>

      <div ref={terminalRef} className="p-4 font-mono text-sm max-h-[500px] overflow-y-auto">
        <div className="text-gray-300 mb-2">
          {welcomeTerminal.map((line, index) => (
            <div key={index}>
              {line}
              <br/>
              <br/>
            </div>
          ))}
        </div>

        {/* Command History */}
        {commandHistory.map((line, index) => (
          <div
            key={index}
            className={`text-gray-200 mb-1 ${
              line.startsWith('$') ? 'text-green-400' : ''
            }`}
          >
            {line}
          </div>
        ))}

        {/* Command Input */}
        <div className="flex text-gray-200">
          <span className="text-green-400">$ </span>
          <input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyUp={handleKeyPress}
            className="flex-1 ml-2 bg-transparent outline-none text-green-400"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}