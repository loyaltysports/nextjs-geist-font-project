'use client';

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import RegistrationForm from '@/components/RegistrationForm'

export default function RegisterPage() {
  const handleRegistrationComplete = (userData: any) => {
    console.log('Registration completed:', userData);
    // Here you would typically save the user data to your database
    // and redirect to the dashboard or activities page
    // For now, we'll redirect to activities page
    window.location.href = '/activities';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            PlanConnect
          </Link>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="ghost">¿Ya tienes cuenta?</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Únete a PlanConnect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crea tu cuenta y descubre tu personalidad para encontrar las actividades perfectas para ti
          </p>
        </div>

        <RegistrationForm 
          onComplete={handleRegistrationComplete}
        />

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/login" className="text-primary hover:underline">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}