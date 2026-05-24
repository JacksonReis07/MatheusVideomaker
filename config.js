// 🎥 PORTFÓLIO DE VÍDEOS
// Para adicionar/remover vídeos, basta editar este array.
// Use caminhos locais: "videos/nome-do-video.mp4"
const portfolioVideos = [
  {
    id: "projeto-1",
    title: "Casamento Ana & Pedro",
    description: "Cobertura completa do casamento com estilo cinematográfico. Captação em 4K, drone e edição com color grading personalizado.",
    videoSrc: "videos/casamento-ana-pedro.mp4",
    poster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "projeto-2",
    title: "Institucional TechCorp",
    description: "Vídeo institucional para empresa de tecnologia. Roteiro, captação em estúdio e locações, motion graphics e trilha sonora original.",
    videoSrc: "videos/institucional-techcorp.mp4",
    poster: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "projeto-3",
    title: "Lançamento Produto Beauty",
    description: "Vídeo de produto para marca de cosméticos. Fotografia de produto, stop motion e animações para redes sociais.",
    videoSrc: "videos/produto-beauty.mp4",
    poster: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "projeto-4",
    title: "Evento Corporativo 2024",
    description: "Cobertura de evento empresarial com 500+ participantes. Multicâmera, entrevistas, highlights e vídeo completo de 30min.",
    videoSrc: "videos/evento-corporativo.mp4",
    poster: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "projeto-5",
    title: "Conteúdo Instagram - Restaurante",
    description: "Série de vídeos curtos para Instagram e TikTok. Reels semanais, stories e conteúdo para campanhas patrocinadas.",
    videoSrc: "videos/restaurante-reels.mp4",
    poster: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "projeto-6",
    title: "Documentário Arte Urbana",
    description: "Documentário de 15min sobre artistas de rua da cidade. Pesquisa, entrevistas, captação e pós-produção completa.",
    videoSrc: "videos/documentario-arte.mp4",
    poster: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=800&q=80"
  }
];

// 🛠️ SERVIÇOS
const services = [
  "🎬 Produção de Vídeo Institucional",
  "📹 Cobertura de Eventos (Casamentos, Corporativos, Shows)",
  "🎥 Vídeos para Redes Sociais (Reels, TikTok, YouTube)",
  "🎨 Direção de Arte e Roteirização",
  "✂️ Edição e Finalização (Color Grading, Motion Graphics)",
  "🚁 Captação com Drone",
  "️ Captação de Áudio Profissional",
  "📦 Entrega em Todos os Formatos"
];

// 📅 ANO ATUAL (Footer)
document.getElementById('year').textContent = new Date().getFullYear();