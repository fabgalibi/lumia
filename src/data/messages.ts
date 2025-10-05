export interface MessageItem {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  lastMessage: string;
  time: string;
  hasUnread: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'contact';
  name: string;
  avatar: string;
  content: string;
  time: string;
  isOnline: boolean;
  isTyping?: boolean;
  file?: {
    name: string;
    type: string;
    size: string;
  };
}

export const mockMessages: MessageItem[] = [
  {
    id: '1',
    name: 'João Pedro',
    avatar: '/images/messages/avatar-joao-pedro-611fc0.png',
    isOnline: true,
    lastMessage: 'Comece pela Lei 8.112, principalmente os capítulos iniciais. Cai bastante nas questões.',
    time: '5 minutos atrás',
    hasUnread: true
  },
  {
    id: '2',
    name: 'Ana Beatriz',
    avatar: '/images/messages/avatar-ana-beatriz.png',
    isOnline: true,
    lastMessage: 'Você: Bom dia professora, qual parte de Direito Administrativo o senhor recomenda revisar primeiro?',
    time: 'Agora',
    hasUnread: false
  },
  {
    id: '3',
    name: 'Fernanda Costa',
    avatar: '/images/messages/avatar-fernanda-costa-65fd5c.png',
    isOnline: false,
    lastMessage: 'Acabei de enviar um novo PDF com 30 questões comentadas de Atos Administrativos. Dê uma olhada e já se prepare para o simulado.',
    time: '1 hora atrás',
    hasUnread: true
  },
  {
    id: '4',
    name: 'Lucas Almeida',
    avatar: '/images/messages/avatar-lucas-almeida.png',
    isOnline: true,
    lastMessage: 'Ótimo! Depois disso, recomendo avançar para os atos administrativos, tema sempre recorrente.',
    time: '4 horas atrás',
    hasUnread: true
  },
  {
    id: '5',
    name: 'Mariana Silva',
    avatar: '/images/messages/avatar-mariana-silva.png',
    isOnline: false,
    lastMessage: 'Sim, às 9h. Não esqueça de revisar os últimos capítulos.',
    time: '2 semanas atrás',
    hasUnread: false
  },
  {
    id: '6',
    name: 'Camila Santos',
    avatar: '/images/messages/avatar-camila-santos.png',
    isOnline: false,
    lastMessage: 'Bom dia! Publiquei um resumo atualizado sobre controle de constitucionalidade. Vale revisar antes da próxima aula.',
    time: '1 mês atrás',
    hasUnread: false
  },
  {
    id: '7',
    name: 'Rafael Oliveira',
    avatar: '/images/messages/avatar-rafael-oliveira-2ac439.png',
    isOnline: true,
    lastMessage: 'E aí! Como está o estudo de lógica?',
    time: 'Ontem 20:15',
    hasUnread: false
  },
];

// Mensagens específicas para cada contato
export const mockChatMessages: Record<string, ChatMessage[]> = {
  '1': [ // João Pedro
    {
      id: '1',
      sender: 'contact',
      name: 'João Pedro',
      avatar: '/images/messages/avatar-joao-pedro-611fc0.png',
      content: 'Oi! Vi que você está estudando para concursos. Posso te ajudar com algumas dicas.',
      time: 'Ontem 14:30',
      isOnline: true
    },
    {
      id: '2',
      sender: 'user',
      name: 'Você',
      avatar: '/images/messages/avatar-joao-pedro-611fc0.png',
      content: 'Obrigado! Estou com dificuldade em Direito Administrativo.',
      time: 'Ontem 14:32',
      isOnline: true
    },
    {
      id: '3',
      sender: 'contact',
      name: 'João Pedro',
      avatar: '/images/messages/avatar-joao-pedro-611fc0.png',
      content: 'Comece pela Lei 8.112, principalmente os capítulos iniciais. Cai bastante nas questões.',
      time: '5 minutos atrás',
      isOnline: true
    }
  ],
  '2': [ // Ana Beatriz
    {
      id: '1',
      sender: 'contact',
      name: 'Ana Beatriz',
      avatar: '/images/messages/avatar-ana-beatriz.png',
      content: 'Acabei de enviar um arquivo com 40 questões comentadas sobre princípios constitucionais.',
      time: 'Quinta-feira 11:40',
      isOnline: true
    },
    {
      id: '2',
      sender: 'contact',
      name: 'Ana Beatriz',
      avatar: '/images/messages/avatar-ana-beatriz.png',
      content: 'principios-constitucionais-max.pdf',
      time: 'Quinta-feira 11:40',
      isOnline: true,
      file: {
        name: 'principios-constitucionais-max.pdf',
        type: 'PDF',
        size: '1.2 MB'
      }
    },
    {
      id: '3',
      sender: 'user',
      name: 'Você',
      avatar: '/images/messages/avatar-ana-beatriz.png',
      content: 'Obrigado professora, em breve retorno com as respostas.',
      time: 'Quinta-feira 11:41',
      isOnline: true
    },
    {
      id: '4',
      sender: 'contact',
      name: 'Ana Beatriz',
      avatar: '/images/messages/avatar-ana-beatriz.png',
      content: 'Só lembrando: quinta às 19h temos mentoria sobre conectivos lógicos.',
      time: 'Quinta-feira 11:44',
      isOnline: true
    },
    {
      id: '5',
      sender: 'user',
      name: 'Você',
      avatar: '/images/messages/avatar-ana-beatriz.png',
      content: 'Bom dia professora, qual parte de Direito Administrativo o senhor recomenda revisar primeiro?',
      time: 'Agora',
      isOnline: true
    },
    {
      id: '6',
      sender: 'contact',
      name: 'Ana Beatriz',
      avatar: '/images/messages/avatar-ana-beatriz.png',
      content: '',
      time: 'Agora',
      isOnline: true,
      isTyping: true
    }
  ],
  '3': [ // Fernanda Costa
    {
      id: '1',
      sender: 'contact',
      name: 'Fernanda Costa',
      avatar: '/images/messages/avatar-fernanda-costa-65fd5c.png',
      content: 'Olá! Como está indo o estudo de Atos Administrativos?',
      time: '2 horas atrás',
      isOnline: false
    },
    {
      id: '2',
      sender: 'user',
      name: 'Você',
      avatar: '/images/messages/avatar-fernanda-costa-65fd5c.png',
      content: 'Estou com algumas dúvidas sobre classificação.',
      time: '1 hora atrás',
      isOnline: false
    },
    {
      id: '3',
      sender: 'contact',
      name: 'Fernanda Costa',
      avatar: '/images/messages/avatar-fernanda-costa-65fd5c.png',
      content: 'Acabei de enviar um novo PDF com 30 questões comentadas de Atos Administrativos. Dê uma olhada e já se prepare para o simulado.',
      time: '1 hora atrás',
      isOnline: false
    }
  ],
  '4': [ // Lucas Almeida
    {
      id: '1',
      sender: 'contact',
      name: 'Lucas Almeida',
      avatar: '/images/messages/avatar-lucas-almeida.png',
      content: 'E aí! Vi que você passou na primeira fase. Parabéns!',
      time: 'Ontem 16:20',
      isOnline: true
    },
    {
      id: '2',
      sender: 'user',
      name: 'Você',
      avatar: '/images/messages/avatar-lucas-almeida.png',
      content: 'Valeu! Agora é focar na segunda fase.',
      time: 'Ontem 16:22',
      isOnline: true
    },
    {
      id: '3',
      sender: 'contact',
      name: 'Lucas Almeida',
      avatar: '/images/messages/avatar-lucas-almeida.png',
      content: 'Ótimo! Depois disso, recomendo avançar para os atos administrativos, tema sempre recorrente.',
      time: '4 horas atrás',
      isOnline: true
    }
  ],
  '5': [ // Mariana Silva
    {
      id: '1',
      sender: 'user',
      name: 'Você',
      avatar: '/images/messages/avatar-mariana-silva.png',
      content: 'Professora, e o simulado amanhã?',
      time: '2 semanas atrás',
      isOnline: false
    },
    {
      id: '2',
      sender: 'contact',
      name: 'Mariana Silva',
      avatar: '/images/messages/avatar-mariana-silva.png',
      content: 'Sim, às 9h. Não esqueça de revisar os últimos capítulos.',
      time: '2 semanas atrás',
      isOnline: false
    }
  ],
  '6': [ // Camila Santos
    {
      id: '1',
      sender: 'contact',
      name: 'Camila Santos',
      avatar: '/images/messages/avatar-camila-santos.png',
      content: 'Bom dia! Publiquei um resumo atualizado sobre controle de constitucionalidade. Vale revisar antes da próxima aula.',
      time: '1 mês atrás',
      isOnline: false
    },
    {
      id: '2',
      sender: 'user',
      name: 'Você',
      avatar: '/images/messages/avatar-camila-santos.png',
      content: 'Obrigado, professor! Vou olhar ainda hoje.',
      time: '1 mês atrás',
      isOnline: false
    }
  ],
  '7': [ // Rafael Oliveira
    {
      id: '1',
      sender: 'contact',
      name: 'Rafael Oliveira',
      avatar: '/images/messages/avatar-rafael-oliveira-2ac439.png',
      content: 'E aí! Como está o estudo de lógica?',
      time: 'Ontem 20:15',
      isOnline: true
    },
    {
      id: '2',
      sender: 'user',
      name: 'Você',
      avatar: '/images/messages/avatar-rafael-oliveira-2ac439.png',
      content: 'Estou indo bem, mas conectivos ainda me confundem.',
      time: 'Ontem 20:17',
      isOnline: true
    },
    {
      id: '3',
      sender: 'contact',
      name: 'Rafael Oliveira',
      avatar: '/images/messages/avatar-rafael-oliveira-2ac439.png',
      content: 'Não esquece que amanhã às 20h temos nossa mentoria ao vivo sobre lógica proposicional.',
      time: '1 mês atrás',
      isOnline: true
    }
  ],
};
