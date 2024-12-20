import {KeyboardEvent, useEffect, useRef, useState} from "react";
import {terminal} from "../terminal.ts";

export default function useTerminal() {
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
  return {
    commandHistory,
    currentCommand,
    handleKeyPress,
    setCurrentCommand,
    terminalRef,
  }
}