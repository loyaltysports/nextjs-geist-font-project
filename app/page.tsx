'use client';

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Calendar, MapPin, Heart, Star, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            PlanConnect
          </div>
          <div className="space-x-4">
            <Link href="/register">
              <Button>Comenzar</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Conecta con personas increíbles
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubre tu personalidad, encuentra actividades que te apasionen y conecta con personas que comparten tus intereses
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="text-lg px-8">
                Crear cuenta gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/activities">
              <Button variant="outline" size="lg" className="text-lg px-8">
                Ver actividades
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">¿Cómo funciona PlanConnect?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nuestro sistema inteligente analiza tu personalidad para sugerirte las mejores actividades y compañeros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Análisis de Personalidad</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Completa nuestro cuestionario inteligente para descubrir tu tipo de personalidad y preferencias de actividades
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Actividades Personalizadas</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Recibe sugerencias de actividades perfectas para tu personalidad, desde aventuras hasta eventos culturales
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Conexiones Auténticas</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Conecta con personas compatibles que comparten tus intereses y forma amistades duraderas
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Usuarios activos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Actividades disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Ciudades</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-muted-foreground flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                Calificación promedio
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para encontrar tu tribu?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Únete a miles de personas que ya han encontrado sus actividades favoritas y nuevos amigos
          </p>
          <Link href="/register">
            <Button size="lg" className="text-lg px-8">
              Comenzar mi aventura
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              PlanConnect
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">Términos</Link>
              <Link href="#" className="hover:text-foreground">Privacidad</Link>
              <Link href="#" className="hover:text-foreground">Contacto</Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t text-center text-sm text-muted-foreground">
            © 2024 PlanConnect. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}