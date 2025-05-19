# Landing Page Pessoal - Vinícius Augusto

Esta landing page foi desenvolvida para apresentar Vinícius Augusto como especialista em Inteligência Artificial aplicada a negócios, com foco em autoridade, storytelling e agendamento de reuniões estratégicas.

## Visão Geral

A página foi construída com React e TypeScript, utilizando animações avançadas e uma estética futurista inspirada no site Lusion.co. O design é responsivo, bilíngue (PT/EN) e focado em criar uma experiência visual imersiva.

## Estrutura

A landing page está organizada nos seguintes blocos:

1. **Header Imersivo**: Animação de partículas com Three.js e frase de impacto
2. **Linha do Tempo**: Jornada profissional interativa com momentos-chave
3. **Projetos**: Cards interativos com storytelling técnico e métricas reais
4. **Como Posso Te Ajudar**: Áreas de atuação com exemplos concretos
5. **Galeria**: Espaço para fotos pessoais e profissionais
6. **Frases de Impacto**: Carrossel de depoimentos e frases estratégicas
7. **Call to Action**: Integração com Calendly para agendamento
8. **Footer**: Links sociais e seletor de idioma

## Tecnologias Utilizadas

- React com TypeScript
- Framer Motion para animações
- Three.js para efeitos 3D
- React Spring para física de animações
- Tailwind CSS para estilização
- Sistema de internacionalização personalizado

## Instruções para Desenvolvimento

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev
```

### Build para Produção

```bash
# Compilar para produção
pnpm run build

# Visualizar build localmente
pnpm run preview
```

## Substituição de Imagens

As imagens utilizadas na landing page são placeholders e devem ser substituídas por imagens reais. Siga as instruções abaixo:

1. **Imagens da Galeria**: Substitua os arquivos em `/public/`:
   - `placeholder-son.jpg` - Foto com o filho
   - `placeholder-work.jpg` - Momento de trabalho
   - `placeholder-project.jpg` - Print de projeto

2. **Imagem de Partícula**: Substitua o arquivo `/public/particle.png` por uma imagem de partícula para o efeito do header.

3. **Imagens de Projetos**: Se desejar adicionar imagens aos cards de projetos, edite o componente `Projects.tsx` e adicione as imagens em `/public/projects/`.

## Migração para Lovable

Para migrar esta landing page para o Lovable, siga estas diretrizes:

1. **Estrutura de Blocos**: Cada componente React corresponde a um bloco no Lovable.
2. **Estilos**: Os estilos Tailwind podem ser adaptados para o sistema de design do Lovable.
3. **Animações**: As animações Framer Motion devem ser recriadas usando as ferramentas disponíveis no Lovable.
4. **Bilinguismo**: O sistema de tradução pode ser adaptado para o sistema de idiomas do Lovable.

## Personalização

### Cores

As cores principais podem ser ajustadas no arquivo `tailwind.config.js`:

- Base escura: #050505 (preto profundo) e #121212 (cinza escuro)
- Acentos: #E63946 (vermelho), #D4AF37 (dourado suave) e #FFFFFF (branco puro)

### Fontes

As fontes utilizadas são:
- Títulos: Space Grotesk
- Corpo: Inter

Para alterar, edite o arquivo `index.css`.

### Conteúdo

O conteúdo textual está localizado no arquivo `src/lib/i18n.ts` e pode ser facilmente editado para ambos os idiomas.

## Contato

Para dúvidas ou suporte na implementação, entre em contato com o desenvolvedor.

---

© 2025 Vinícius Augusto Martins de Araújo Paschoa. Todos os direitos reservados.
