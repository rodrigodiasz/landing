import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  ChevronRight,
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Heart,
  Award,
  Users,
  ParkingCircle,
  Wifi,
  Coffee,
  ExternalLink,
  Linkedin,
  GraduationCap,
  Calendar,
  Languages,
  X,
  BookOpen,
  Brain,
  Dumbbell,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useCallback, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Hero carousel hook
const useHeroCarousel = (images: any[], interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, images.length]);

  return { currentIndex, setCurrentIndex };
};

// Smooth scroll hook
const useSmoothScroll = () => {
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      if (!href) return;

      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      const headerOffset = 80; // altura do header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    },
    []
  );

  return scrollToSection;
};

function App() {
  const scrollToSection = useSmoothScroll();

  const structureImages = [
    {
      url: "https://images.unsplash.com/photo-1604467731651-3d8b9c702b86?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sala de Pilates",
      description:
        "Equipamentos modernos e ambiente climatizado para seu conforto.",
    },
    {
      url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070",
      title: "Consultório de Fisioterapia",
      description:
        "Espaço privativo para avaliação e tratamentos personalizados.",
    },
    {
      url: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Recepção Acolhedora",
      description: "Ambiente confortável para aguardar seu atendimento.",
    },
    {
      url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Área de Convivência",
      description:
        "Espaço para relaxar e socializar antes ou depois das sessões.",
    },
    {
      url: "https://images.unsplash.com/photo-1534405111774-ade5c6e8f02d?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Vestiários Modernos",
      description: "Privacidade e conforto para todos os clientes.",
    },
    {
      url: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Estacionamento Exclusivo",
      description: "Facilidade e segurança para sua visita.",
    },
  ];

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1591258370814-01609b341790?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pilates",
      description: "Transforme seu corpo e mente",
    },
    {
      url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070",
      title: "Fisioterapia",
      description: "Cuide da sua saúde",
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
      title: "Bem-estar",
      description: "Viva melhor",
    },
  ];

  const { currentIndex: currentHeroIndex } = useHeroCarousel(heroImages, 3000);

  const professionals = [
    {
      name: "Dra. Ana Silva",
      role: "Fisioterapeuta",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070",
      specialties: [
        "Fisioterapia Ortopédica",
        "Pilates Clínico",
        "Reabilitação Esportiva",
      ],
      education: [
        "Graduação em Fisioterapia - Universidade Federal",
        "Especialização em Pilates Clínico",
        "Mestrado em Reabilitação Esportiva",
      ],
      experience: "10+ anos de experiência",
      languages: ["Português", "Inglês", "Espanhol"],
      certifications: [
        "Certificação Internacional em Pilates",
        "Especialização em Reabilitação Esportiva",
        "Formação em Terapia Manual",
      ],
      description:
        "Especialista em reabilitação ortopédica e esportiva, com vasta experiência em tratamento de lesões e recuperação de atletas.",
      social: {
        instagram: "@drasilva",
        linkedin: "linkedin.com/in/drasilva",
      },
    },
    {
      name: "Dr. Carlos Santos",
      role: "Fisioterapeuta",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2070",
      specialties: [
        "Fisioterapia Neurológica",
        "Pilates",
        "Reabilitação Postural",
      ],
      education: [
        "Graduação em Fisioterapia - Universidade Estadual",
        "Especialização em Fisioterapia Neurológica",
        "Doutorado em Neurociências",
      ],
      experience: "8+ anos de experiência",
      languages: ["Português", "Inglês"],
      certifications: [
        "Certificação em Pilates Clínico",
        "Especialização em Neurologia",
        "Formação em Reabilitação Postural",
      ],
      description:
        "Especialista em reabilitação neurológica e postural, com foco em qualidade de vida e bem-estar dos pacientes.",
      social: {
        instagram: "@drcarlos",
        linkedin: "linkedin.com/in/drcarlos",
      },
    },
    {
      name: "Dra. Mariana Costa",
      role: "Fisioterapeuta",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070",
      specialties: [
        "Fisioterapia Respiratória",
        "Pilates",
        "Reabilitação Cardíaca",
      ],
      education: [
        "Graduação em Fisioterapia - Universidade de São Paulo",
        "Especialização em Fisioterapia Respiratória",
        "Mestrado em Saúde Respiratória",
      ],
      experience: "6+ anos de experiência",
      languages: ["Português", "Inglês", "Francês"],
      certifications: [
        "Certificação em Pilates Avançado",
        "Especialização em Reabilitação Cardíaca",
        "Formação em Terapia Respiratória",
      ],
      description:
        "Especialista em reabilitação respiratória e cardíaca, com experiência em tratamento de doenças pulmonares crônicas.",
      social: {
        instagram: "@dramariana",
        linkedin: "linkedin.com/in/dramariana",
      },
    },
  ];

  const testimonials = [
    {
      name: "Juliana Souza",
      role: "Empresária",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "O atendimento é excelente! Senti muita diferença após as sessões de pilates e fisioterapia. Recomendo a todos!",
    },
    {
      name: "Carlos Pereira",
      role: "Professor",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Equipe muito atenciosa e ambiente acolhedor. Minha recuperação foi rápida e eficiente.",
    },
    {
      name: "Fernanda Lima",
      role: "Designer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4,
      text: "Adorei a estrutura e o cuidado dos profissionais. Me senti segura durante todo o tratamento.",
    },
  ];

  const services = [
    {
      title: "Pilates Clínico",
      icon: <Dumbbell className="w-8 h-8 text-emerald-600" />,
      description:
        "Exercícios personalizados para fortalecimento, flexibilidade e reabilitação, com acompanhamento profissional.",
    },
    {
      title: "Fisioterapia Ortopédica",
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      description:
        "Tratamento de dores, lesões e disfunções musculoesqueléticas com técnicas avançadas e atendimento humanizado.",
    },
    {
      title: "Fisioterapia Geriátrica",
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      description:
        "Cuidados especiais para idosos, promovendo autonomia, equilíbrio e qualidade de vida.",
    },
    {
      title: "Reabilitação Esportiva",
      icon: <Brain className="w-8 h-8 text-emerald-600" />,
      description:
        "Recuperação de atletas e praticantes de esportes, com foco em retorno seguro e prevenção de lesões.",
    },
    {
      title: "Fisioterapia Respiratória",
      icon: <BookOpen className="w-8 h-8 text-emerald-600" />,
      description:
        "Tratamento de doenças pulmonares e melhora da capacidade respiratória com técnicas especializadas.",
    },
    {
      title: "Avaliação Postural",
      icon: <MapPin className="w-8 h-8 text-emerald-600" />,
      description:
        "Análise detalhada da postura para prevenção e correção de desvios, promovendo bem-estar.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-emerald-50/30 to-white">
      {/* Header with glass effect */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-emerald-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-emerald-600">
                Lovable
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {[
                { name: "Início", href: "#home" },
                { name: "Serviços", href: "#services" },
                { name: "Profissionais", href: "#professionals" },
                { name: "Estrutura", href: "#structure" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={scrollToSection}
                  className="text-gray-600 hover:text-emerald-600 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <Button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105">
                Agende um horário
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {[
                    { name: "Início", href: "#home" },
                    { name: "Serviços", href: "#services" },
                    { name: "Profissionais", href: "#professionals" },
                    { name: "Estrutura", href: "#structure" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={scrollToSection}
                      className="text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Agende um horário
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Auto-scrolling Background */}
        <section
          id="home"
          className="pt-32 pb-20 relative min-h-[90vh] flex items-center overflow-hidden"
        >
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentHeroIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundAttachment: "fixed",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
              </div>
            ))}
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="mb-8 flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-emerald-400 text-emerald-400"
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold text-emerald-400">
                  5/5 em avaliações
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Sinta a Mudança,
                <br />
                <span className="text-emerald-400 relative">
                  Viva a Evolução
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </span>
              </h1>
              <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-200">
                {heroImages[currentHeroIndex].description}
              </p>
              <div className="flex gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Agende um horário
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                Cuidados especializados para o seu{" "}
                <span className="text-emerald-600">bem-estar</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Oferecemos uma ampla gama de serviços para atender às suas
                necessidades de saúde e bem-estar.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-emerald-100 hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="mb-4 bg-emerald-50 rounded-full p-4 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-2 group-hover:text-emerald-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-4">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Structure Section */}
        <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                Nossa Estrutura
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Conheça nossa estrutura completa e moderna, projetada para
                oferecer o melhor atendimento.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {structureImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                      {img.title}
                    </h3>
                    <p className="text-gray-100 text-sm drop-shadow">
                      {img.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                O que nossos clientes dizem
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Depoimentos de quem já experimentou nossos serviços
              </p>
            </div>
            <Carousel
              opts={{ align: "center", loop: true }}
              className="w-full max-w-2xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, idx) => (
                  <CarouselItem key={idx} className="px-2">
                    <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center relative min-h-[340px]">
                      <div className="absolute top-6 left-6 text-emerald-100 text-6xl select-none pointer-events-none">
                        "
                      </div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full border-4 border-emerald-100 object-cover mb-4 z-10"
                      />
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-emerald-400 text-emerald-400"
                          />
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 font-medium mb-6 z-10">
                        {testimonial.text}
                      </p>
                      <div className="mt-auto">
                        <h3 className="text-xl font-bold text-emerald-700">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0 hover:bg-emerald-100 transition-colors duration-300" />
                <CarouselNext className="static translate-y-0 hover:bg-emerald-100 transition-colors duration-300" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Professionals Section */}
        <section
          id="professionals"
          className="py-20 bg-gradient-to-b from-white to-emerald-50/30"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Nossa Equipe
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conheça nossos profissionais altamente qualificados e dedicados
                ao seu bem-estar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionals.map((professional, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer h-full">
                      <Card className="border-emerald-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg group flex flex-col h-full min-h-[480px]">
                        <CardContent className="p-6 flex flex-col flex-1">
                          <div className="relative mb-6">
                            <div className="aspect-square rounded-xl overflow-hidden">
                              <img
                                src={professional.image}
                                alt={professional.name}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
                              <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm font-medium text-gray-700">
                                  5.0
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-gray-800">
                            {professional.name}
                          </h3>
                          <p className="text-emerald-600 font-medium mb-4">
                            {professional.role}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {professional.specialties.map((specialty, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-600 mb-4 flex-1">
                            {professional.description}
                          </p>
                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm text-gray-500">
                              {professional.experience}
                            </span>
                            <Button
                              variant="ghost"
                              className="text-emerald-600 hover:text-emerald-700"
                            >
                              Ver perfil completo
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl p-0 overflow-hidden">
                    <div className="relative flex flex-col md:flex-row h-[600px] md:h-[600px]">
                      {/* Left: Full-height image with info at the bottom */}
                      <div className="relative w-full md:w-1/2 h-64 md:h-full flex flex-col justify-end">
                        <img
                          src={professional.image}
                          alt={professional.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="relative z-10 p-6 md:p-8 flex flex-col items-start">
                          <h3 className="text-2xl md:text-3xl font-bold mb-1 text-white drop-shadow">
                            {professional.name}
                          </h3>
                          <p className="text-emerald-300 font-medium text-lg md:text-xl drop-shadow">
                            {professional.role}
                          </p>
                        </div>
                      </div>
                      {/* Right: Info */}
                      <div className="w-full md:w-1/2 bg-white h-full flex flex-col justify-between p-6 md:p-10 overflow-y-auto">
                        <div>
                          <div className="flex gap-4 justify-end mb-6">
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full hover:bg-emerald-50 hover:text-emerald-600"
                            >
                              <Instagram className="h-5 w-5" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full hover:bg-emerald-50 hover:text-emerald-600"
                            >
                              <Linkedin className="h-5 w-5" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full hover:bg-emerald-50 hover:text-emerald-600"
                            >
                              <Mail className="h-5 w-5" />
                            </Button>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full ml-auto"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                          </div>
                          <div className="space-y-8">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <GraduationCap className="w-5 h-5 text-emerald-600" />
                                <h4 className="font-semibold text-gray-800">
                                  Formação
                                </h4>
                              </div>
                              <ul className="space-y-2">
                                {professional.education.map((edu, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2" />
                                    <span className="text-gray-600">{edu}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-emerald-600" />
                                <h4 className="font-semibold text-gray-800">
                                  Certificações
                                </h4>
                              </div>
                              <ul className="space-y-2">
                                {professional.certifications.map(
                                  (cert, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2" />
                                      <span className="text-gray-600">
                                        {cert}
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <Languages className="w-5 h-5 text-emerald-600" />
                                <h4 className="font-semibold text-gray-800">
                                  Idiomas
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {professional.languages.map((lang, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm"
                                  >
                                    {lang}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <Brain className="w-5 h-5 text-emerald-600" />
                                <h4 className="font-semibold text-gray-800">
                                  Especialidades
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {professional.specialties.map(
                                  (specialty, idx) => (
                                    <span
                                      key={idx}
                                      className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm"
                                    >
                                      {specialty}
                                    </span>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pt-8 border-t mt-8">
                          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-base flex items-center justify-center gap-2 whitespace-nowrap">
                            Agendar Consulta
                            <Calendar className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Clinic Section */}
        <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070"
                    alt="Nossa Clínica"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Users className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">+1000</p>
                      <p className="text-sm text-gray-600">
                        Pacientes Atendidos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full">
                  <p className="text-emerald-600 font-medium">Nossa Clínica</p>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Um ambiente acolhedor e moderno para o seu bem-estar
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nossa clínica foi projetada para oferecer o máximo conforto e
                  tranquilidade. Com equipamentos de última geração e espaços
                  amplos, garantimos uma experiência única em cada atendimento.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Horário Flexível
                      </h3>
                      <p className="text-sm text-gray-600">
                        Atendimento de segunda a sábado
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <ParkingCircle className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Estacionamento
                      </h3>
                      <p className="text-sm text-gray-600">
                        Vagas exclusivas para pacientes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Wifi className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Wi-Fi Gratuito
                      </h3>
                      <p className="text-sm text-gray-600">
                        Conectividade para todos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <Coffee className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Área de Convivência
                      </h3>
                      <p className="text-sm text-gray-600">
                        Espaço para relaxar
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Agende uma visita
                    <MapPin className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    Ver localização
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-2xl font-bold">Lovable</span>
                </div>
                <p className="text-emerald-100 mb-6">
                  Transformando vidas através da fisioterapia e pilates.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-white hover:text-emerald-200 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-emerald-200 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-emerald-200 transition-colors"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6">
                  Horário de Funcionamento
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-emerald-100">
                    <Clock className="w-5 h-5" />
                    <span>Segunda a Sexta: 8h às 20h</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100">
                    <Clock className="w-5 h-5" />
                    <span>Sábado: 8h às 14h</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6">Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-emerald-100">
                    <MapPin className="w-5 h-5" />
                    <span>Rua Example, 123 - Centro</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100">
                    <Phone className="w-5 h-5" />
                    <span>(11) 1234-5678</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-100">
                    <Mail className="w-5 h-5" />
                    <span>contato@evolution.com</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
                <p className="text-emerald-100 mb-4">
                  Receba novidades e dicas de saúde.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:border-white/40"
                  />
                  <Button className="bg-white text-emerald-600 hover:bg-emerald-50">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            <Separator className="my-8 bg-white/10" />
            <div className="text-center text-emerald-100">
              <p>© 2024 Lovable. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
