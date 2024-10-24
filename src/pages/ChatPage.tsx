import React, { useState, useRef, useEffect } from 'react'
import { Menu, Send, MoreVertical } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface ChatHistory {
  id: number
  name: string
  lastMessage: string
  timestamp: Date
}

export default function ChatApp() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you today?", sender: 'bot', timestamp: new Date() }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([
    { id: 1, name: "AI Assistant", lastMessage: "Hello! How can I help you today?", timestamp: new Date() },
    { id: 2, name: "Travel Planner", lastMessage: "Your itinerary is ready!", timestamp: new Date(Date.now() - 86400000) },
    { id: 3, name: "Code Helper", lastMessage: "Here's an example of a React component", timestamp: new Date(Date.now() - 172800000) },
  ])
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [inputMessage])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user',
        timestamp: new Date()
      }
      setMessages([...messages, newMessage])
      setInputMessage('')

      // Update chat history
      const updatedHistory = [
        { id: 1, name: "AI Assistant", lastMessage: inputMessage.split('\n')[0], timestamp: new Date() },
        ...chatHistory.slice(1)
      ]
      setChatHistory(updatedHistory)

      // Simulate a bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: "I understand. How else can I assist you with that?",
          sender: 'bot',
          timestamp: new Date()
        }
        setMessages(prevMessages => [...prevMessages, botResponse])
        
        // Update chat history again
        const updatedHistoryWithBot = [
          { id: 1, name: "AI Assistant", lastMessage: botResponse.text, timestamp: new Date() },
          ...updatedHistory.slice(1)
        ]
        setChatHistory(updatedHistoryWithBot)
      }, 1000)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white border-r">
        <ProfileSection />
        <ChatHistoryList chatHistory={chatHistory} />
      </aside>

      {/* Main chat area */}
      <main className="flex-1 flex flex-col">
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <ProfileSection />
                <ChatHistoryList chatHistory={chatHistory} />
              </SheetContent>
            </Sheet>
            <h1 className="text-xl font-semibold">AI Assistant</h1>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical />
            <span className="sr-only">More options</span>
          </Button>
        </header>

        <ScrollArea className="flex-1 p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.text.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index !== message.text.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </ScrollArea>

        <div className="border-t p-4 bg-white">
          <div className="flex space-x-2">
            <Textarea
              ref={textareaRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message... (Shift+Enter to send)"
              className="flex-grow min-h-[40px] max-h-[120px] resize-none"
              rows={1}
            />
            <Button onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

function ProfileSection() {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center space-x-3">
        <Avatar>
          <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">User Name</h2>
          <p className="text-sm text-gray-500">user@example.com</p>
        </div>
      </div>
    </div>
  )
}

function ChatHistoryList({ chatHistory }: { chatHistory: ChatHistory[] }) {
  return (
    <ScrollArea className="flex-1">
      <div className="p-2">
        {chatHistory.map((chat) => (
          <div key={chat.id} className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Avatar>
              <AvatarFallback>{chat.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium">{chat.name}</h3>
              <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>
            </div>
            <span className="text-xs text-gray-400">
              {chat.timestamp.toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}