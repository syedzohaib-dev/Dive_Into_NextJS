import { TodoProvider } from '@/context/todoContext';
import './globals.css'


export const metadata = {
  title: 'Home |Software Company',
  description: 'A software company that provides innovative solutions to businesses of all sizes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  );
}
