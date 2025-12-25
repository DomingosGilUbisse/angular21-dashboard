import { Injectable } from '@angular/core';

export interface ComponentVariant {
  name: string;
  classes: string;
  description: string;
  codeExample: string;
}

export interface ShowcaseComponent {
  id: string;
  name: string;
  description: string;
  category: 'ui' | 'forms' | 'interactive';
  codeExample: string;
  variants?: ComponentVariant[];
}

@Injectable({
  providedIn: 'root'
})
export class ShowcaseService {

  getUIComponents(): ShowcaseComponent[] {
    return [
      {
        id: 'buttons',
        name: 'Botões',
        description: 'Diferentes estilos e variações de botões',
        category: 'ui',
        codeExample: `<button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg">
  Botão Primário
</button>`,
        variants: [
          { name: 'Primário', classes: 'bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all', description: 'Botão principal com cor de marca', codeExample: `<button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all">Botão Primário</button>` },
          { name: 'Secundário', classes: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg', description: 'Botão secundário com cores neutras', codeExample: `<button class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg">Botão Secundário</button>` },
          { name: 'Outline', classes: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg transition-all', description: 'Botão com borda e efeito hover', codeExample: `<button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-all">Botão Outline</button>` },
          { name: 'Ghost', classes: 'text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900 px-6 py-3 rounded-lg transition-all', description: 'Botão minimalista com fundo apenas no hover', codeExample: `<button class="text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 px-6 py-3 rounded-lg transition-all">Botão Ghost</button>` }
        ]
      },
      {
        id: 'cards',
        name: 'Cards',
        description: 'Componentes de card com diferentes layouts',
        category: 'ui',
        codeExample: `<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
  <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Título do Card</h3>
  <p class="text-gray-600 dark:text-gray-400 mt-2">Conteúdo do card</p>
</div>`,
        variants: [
          { name: 'Básico', classes: 'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700', description: 'Card simples com borda e sombra', codeExample: `<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
  <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Título do Card</h3>
  <p class="text-gray-600 dark:text-gray-400 mt-2">Conteúdo do card</p>
</div>` },
          { name: 'Com Hover', classes: 'bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all cursor-pointer', description: 'Card com efeito hover interativo', codeExample: `<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
  <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Card Interativo</h3>
  <p class="text-gray-600 dark:text-gray-400 mt-2">Passe o mouse para ver o efeito</p>
</div>` },
          { name: 'Destacado', classes: 'bg-gradient-to-br from-primary-50 to-accent-purple/10 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg border-2 border-primary-200 dark:border-primary-800', description: 'Card com gradiente de destaque', codeExample: `<div class="bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
  <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Card Destacado</h3>
  <p class="text-gray-600 dark:text-gray-400 mt-2">Card com gradiente de destaque</p>
</div>` }
        ]
      },
      {
        id: 'alerts',
        name: 'Alertas',
        description: 'Mensagens de alerta para diferentes contextos',
        category: 'ui',
        codeExample: `<div class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
  <p class="font-medium">Sucesso!</p>
  <p class="text-sm">Sua operação foi concluída com sucesso.</p>
</div>`,
        variants: [
          { name: 'Sucesso', classes: 'bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg', description: 'Alerta de sucesso em verde', codeExample: `<div class="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
  <p class="font-medium">Sucesso!</p>
  <p class="text-sm">Sua operação foi concluída com sucesso.</p>
</div>` },
          { name: 'Erro', classes: 'bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg', description: 'Alerta de erro em vermelho', codeExample: `<div class="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
  <p class="font-medium">Erro!</p>
  <p class="text-sm">Ocorreu um erro ao processar sua solicitação.</p>
</div>` },
          { name: 'Aviso', classes: 'bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg', description: 'Alerta de aviso em amarelo', codeExample: `<div class="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg">
  <p class="font-medium">Aviso!</p>
  <p class="text-sm">Por favor, revise as informações antes de continuar.</p>
</div>` },
          { name: 'Info', classes: 'bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg', description: 'Alerta informativo em azul', codeExample: `<div class="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg">
  <p class="font-medium">Informação!</p>
  <p class="text-sm">Este é um alerta informativo para o usuário.</p>
</div>` }
        ]
      },
      {
        id: 'badges',
        name: 'Badges',
        description: 'Etiquetas para status e categorias',
        category: 'ui',
        codeExample: `<span class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
  Novo
</span>`,
        variants: [
          { name: 'Primário', classes: 'bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full', description: 'Badge com cor primária', codeExample: `<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Novo</span>` },
          { name: 'Sucesso', classes: 'bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full', description: 'Badge de sucesso', codeExample: `<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Ativo</span>` },
          { name: 'Grande', classes: 'bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full', description: 'Badge em tamanho maior', codeExample: `<span class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Em Destaque</span>` }
        ]
      }
    ];
  }

  getFormComponents(): ShowcaseComponent[] {
    return [
      {
        id: 'contact-form',
        name: 'Formulário de Contato',
        description: 'Formulário completo com validação',
        category: 'forms',
        codeExample: `<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
    <input type="text" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
  </div>
  <!-- Mais campos... -->
</form>`
      },
      {
        id: 'login-form',
        name: 'Formulário de Login',
        description: 'Formulário de autenticação com campos de email e senha',
        category: 'forms',
        codeExample: `<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
    <input type="email" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg">
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Senha</label>
    <input type="password" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg">
  </div>
</form>`
      },
      {
        id: 'register-form',
        name: 'Formulário de Registro',
        description: 'Formulário completo de cadastro',
        category: 'forms',
        codeExample: `<form class="space-y-4">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input type="text" placeholder="Nome" class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg">
    <input type="text" placeholder="Sobrenome" class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg">
  </div>
  <!-- Mais campos... -->
</form>`
      }
    ];
  }

  getInteractiveComponents(): ShowcaseComponent[] {
    return [
      {
        id: 'hover-effects',
        name: 'Efeitos Hover',
        description: 'Componentes com efeitos hover interativos',
        category: 'interactive',
        codeExample: `<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
  <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Card Interativo</h3>
  <p class="text-gray-600 dark:text-gray-400 mt-2">Passe o mouse para ver o efeito</p>
</div>`
      },
      {
        id: 'transitions',
        name: 'Transições',
        description: 'Animações e transições suaves',
        category: 'interactive',
        codeExample: `<div class="bg-gradient-to-r from-primary-500 to-accent-purple text-white p-6 rounded-lg animate-pulse">
  <h3 class="text-lg font-semibold">Componente Animado</h3>
  <p class="mt-2">Com efeito pulse suave</p>
</div>`
      }
    ];
  }

  copyToClipboard(text: string): Promise<void> {
    return navigator.clipboard.writeText(text);
  }
}
