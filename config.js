// 🎥 PORTFÓLIO DE VÍDEOS
// Para adicionar/remover vídeos, basta editar este array.
// Use caminhos locais: "videos/nome-do-video.mp4"
const portfolioVideos = [
  {
    id: "projeto-1",
    title: "Casamento Cinematográfico",
    description: "Cobertura completa de casamento com estilo cinematográfico. Captação em 4K, drone e edição com color grading personalizado.",
    videoSrc: "videos/video1.mp4",
    poster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "projeto-2",
    title: "Vídeo Institucional",
    description: "Produção institucional para empresas. Roteiro, captação em estúdio e locações, motion graphics e trilha sonora original.",
    videoSrc: "videos/video2.mp4",
    poster: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "projeto-3",
    title: "Conteúdo para Redes Sociais",
    description: "Vídeos dinâmicos para Instagram, TikTok e YouTube. Reels, stories e conteúdo engajador para suas redes sociais.",
    videoSrc: "videos/video3.mp4",
    poster: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
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