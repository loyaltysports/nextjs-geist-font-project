'use client';

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Users, Clock, Star } from 'lucide-react'

// Mock data for activities
const activities = [
  {
    id: 1,
    title: "Senderismo en la Montaña",
    description: "Explora senderos naturales con vistas espectaculares. Perfecto para amantes de la naturaleza y el ejercicio.",
    location: "Parque Nacional, Madrid",
    date: "2024-02-15",
    time: "09:00",
    participants: 8,
    maxParticipants: 12,
    difficulty: "Intermedio",
    category: "Aventura",
    rating: 4.8,
    price: "Gratis",
    organizer: "María González",
    tags: ["Naturaleza", "Ejercicio", "Fotografía"]
  },
  {
    id: 2,
    title: "Taller de Cocina Italiana",
    description: "Aprende a preparar pasta fresca y salsas tradicionales con un chef profesional.",
    location: "Escuela Culinaria, Barcelona",
    date: "2024-02-18",
    time: "18:30",
    participants: 6,
    maxParticipants: 10,
    difficulty: "Principiante",
    category: "Gastronomía",
    rating: 4.9,
    price: "€45",
    organizer: "Chef Antonio",
    tags: ["Cocina", "Aprendizaje", "Social"]
  },
  {
    id: 3,
    title: "Noche de Juegos de Mesa",
    description: "Disfruta de una velada divertida con juegos de estrategia y cartas en un ambiente relajado.",
    location: "Café Ludoteca, Valencia",
    date: "2024-02-20",
    time: "19:00",
    participants: 12,
    maxParticipants: 16,
    difficulty: "Todos los niveles",
    category: "Social",
    rating: 4.7,
    price: "€8",
    organizer: "Club de Juegos Valencia",
    tags: ["Juegos", "Social", "Relajado"]
  },
  {
    id: 4,
    title: "Clase de Yoga al Amanecer",
    description: "Comienza el día con energía positiva en una sesión de yoga matutina en el parque.",
    location: "Parque del Retiro, Madrid",
    date: "2024-02-22",
    time: "07:00",
    participants: 15,
    maxParticipants: 20,
    difficulty: "Todos los niveles",
    category: "Bienestar",
    rating: 4.6,
    price: "€12",
    organizer: "Ana Wellness",
    tags: ["Yoga", "Bienestar", "Mañana"]
  },
  {
    id: 5,
    title: "Tour Fotográfico Urbano",
    description: "Explora los rincones más fotogénicos de la ciudad mientras aprendes técnicas de fotografía.",
    location: "Centro Histórico, Sevilla",
    date: "2024-02-25",
    time: "16:00",
    participants: 7,
    maxParticipants: 12,
    difficulty: "Intermedio",
    category: "Arte",
    rating: 4.8,
    price: "€25",
    organizer: "Foto Club Sevilla",
    tags: ["Fotografía", "Arte", "Cultura"]
  },
  {
    id: 6,
    title: "Intercambio de Idiomas",
    description: "Practica español, inglés y francés en un ambiente divertido y multicultural.",
    location: "Café Internacional, Bilbao",
    date: "2024-02-28",
    time: "20:00",
    participants: 20,
    maxParticipants: 30,
    difficulty: "Todos los niveles",
    category: "Educativo",
    rating: 4.5,
    price: "Gratis",
    organizer: "Language Exchange Bilbao",
    tags: ["Idiomas", "Cultural", "Social"]
  }
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            PlanConnect
          </Link>
          <div className="space-x-4">
            <Link href="/register">
              <Button>Crear cuenta</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Actividades Disponibles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre actividades increíbles y conecta con personas que comparten tus intereses
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Todas
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Aventura
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Social
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Bienestar
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Arte
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Gastronomía
          </Badge>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {activities.map((activity) => (
            <Card key={activity.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{activity.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{activity.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{activity.title}</CardTitle>
                <CardDescription className="text-sm">
                  {activity.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {activity.location}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(activity.date).toLocaleDateString('es-ES', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {activity.time}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {activity.participants}/{activity.maxParticipants} participantes
                </div>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {activity.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-3 border-t">
                  <div className="text-lg font-semibold text-primary">
                    {activity.price}
                  </div>
                  <Button size="sm">
                    Unirse
                  </Button>
                </div>
                
                <div className="text-xs text-muted-foreground">
                  Organizado por {activity.organizer}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 p-8 bg-muted/50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-muted-foreground mb-6">
            Crea tu cuenta para recibir recomendaciones personalizadas basadas en tu personalidad
          </p>
          <Link href="/register">
            <Button size="lg">
              Crear cuenta gratis
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}