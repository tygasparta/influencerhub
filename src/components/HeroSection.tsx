import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Video } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-modern text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full floating-animation" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full floating-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/5 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-white/5 rounded-full floating-animation" style={{ animationDelay: '0.5s' }}></div>
        <svg className="book-animate absolute left-10 top-10 w-16 h-16 opacity-70" viewBox="0 0 64 64" fill="none"><rect x="8" y="12" width="48" height="40" rx="6" fill="#fff" stroke="#3b82f6" strokeWidth="3"/><rect x="16" y="20" width="32" height="24" rx="3" fill="#e0e7ff"/><rect x="24" y="28" width="16" height="8" rx="2" fill="#3b82f6"/></svg>
        <svg className="book-animate absolute right-20 top-32 w-12 h-12 opacity-60" viewBox="0 0 64 64" fill="none"><rect x="8" y="12" width="48" height="40" rx="6" fill="#fff" stroke="#6366f1" strokeWidth="3"/><rect x="16" y="20" width="32" height="24" rx="3" fill="#dbeafe"/><rect x="24" y="28" width="16" height="8" rx="2" fill="#6366f1"/></svg>
        <svg className="book-animate absolute left-1/2 bottom-20 w-20 h-20 opacity-50" style={{ transform: 'translateX(-50%)' }} viewBox="0 0 64 64" fill="none"><rect x="8" y="12" width="48" height="40" rx="6" fill="#fff" stroke="#f59e42" strokeWidth="3"/><rect x="16" y="20" width="32" height="24" rx="3" fill="#fef3c7"/><rect x="24" y="28" width="16" height="8" rx="2" fill="#f59e42"/></svg>
        <svg className="book-animate absolute right-10 bottom-10 w-14 h-14 opacity-60" viewBox="0 0 64 64" fill="none"><rect x="8" y="12" width="48" height="40" rx="6" fill="#fff" stroke="#10b981" strokeWidth="3"/><rect x="16" y="20" width="32" height="24" rx="3" fill="#d1fae5"/><rect x="24" y="28" width="16" height="8" rx="2" fill="#10b981"/></svg>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight slide-in-left">
                Empowering Through
                <span className="block text-gray-300 bounce-gentle">Education</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed fade-in-up" style={{ animationDelay: '0.3s' }}>
                Join Ronald T. Sambona on a journey of learning, empowerment, and social change. 
                Discover courses, articles, and content that inspire growth and transformation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform duration-300">
                Explore Content
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
                onClick={() => window.open('http://www.youtube.com/@president_sambona', '_blank')}
              >
                Watch Videos
              </Button>
            </div>

            {/* Audio Section Start */}
            <div className="pt-8 pb-4 fade-in-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-3xl font-extrabold mb-8 text-white drop-shadow-lg tracking-tight" style={{textShadow: '0 2px 16px #7c3aed88'}}>Listen to Our Audios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Audio Card 1 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 flex flex-col items-center shadow-2xl border border-purple-400/30 hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300 group relative overflow-hidden max-w-xs w-full mx-auto min-h-0">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-purple-400/20 rounded-full blur-2xl z-0"></div>
                  <svg className="mb-1 text-purple-300 group-hover:text-purple-400 transition" width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M8 5v14l11-7L8 5z" fill="currentColor"/></svg>
                  <span className="mb-2 font-extrabold text-sm md:text-base text-white drop-shadow-md z-10 text-center leading-tight break-words" style={{background: 'linear-gradient(90deg, #a78bfa, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', wordBreak: 'break-word'}}>Mr Ronald T. Sambona Intro Audio</span>
                  <audio controls className="w-full rounded-xl bg-white/80 shadow-inner z-10 mt-1 mb-0 h-10">
                    <source src="/audios/Mr Ronald T. Sambona intro audio.m4a" type="audio/mp4" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                {/* Audio Card 2 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 flex flex-col items-center shadow-2xl border border-blue-400/30 hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300 group relative overflow-hidden max-w-xs w-full mx-auto min-h-0">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl z-0"></div>
                  <svg className="mb-1 text-blue-300 group-hover:text-blue-400 transition" width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M10 8l6 4-6 4V8z" fill="currentColor"/></svg>
                  <span className="mb-2 font-extrabold text-sm md:text-base text-white drop-shadow-md z-10 text-center leading-tight break-words" style={{background: 'linear-gradient(90deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', wordBreak: 'break-word'}}>My Advocacy Story</span>
                  <audio controls className="w-full rounded-xl bg-white/80 shadow-inner z-10 mt-1 mb-0 h-10">
                    <source src="/audios/My Advocacy Story.m4a" type="audio/mp4" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                {/* Audio Card 3 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 flex flex-col items-center shadow-2xl border border-pink-400/30 hover:scale-105 hover:shadow-pink-500/30 transition-all duration-300 group relative overflow-hidden max-w-xs w-full mx-auto min-h-0">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-pink-400/20 rounded-full blur-2xl z-0"></div>
                  <svg className="mb-1 text-pink-300 group-hover:text-pink-400 transition" width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" fill="currentColor"/><path d="M10 8l6 4-6 4V8z" fill="#fff"/></svg>
                  <span className="mb-2 font-extrabold text-sm md:text-base text-white drop-shadow-md z-10 text-center leading-tight break-words" style={{background: 'linear-gradient(90deg, #f472b6, #facc15)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', wordBreak: 'break-word'}}>My Journalism Story</span>
                  <audio controls className="w-full rounded-xl bg-white/80 shadow-inner z-10 mt-1 mb-0 h-10">
                    <source src="/audios/My Journalism Story.m4a" type="audio/mp4" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                {/* Audio Card 4 */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 flex flex-col items-center shadow-2xl border border-rose-400/30 hover:scale-105 hover:shadow-rose-500/30 transition-all duration-300 group relative overflow-hidden max-w-xs w-full mx-auto min-h-0">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-rose-400/20 rounded-full blur-2xl z-0"></div>
                  <svg className="mb-1 text-rose-300 group-hover:text-rose-400 transition" width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" fill="currentColor"/><path d="M10 8l6 4-6 4V8z" fill="#fff"/></svg>
                  <span className="mb-2 font-extrabold text-sm md:text-base text-white drop-shadow-md z-10 text-center leading-tight break-words" style={{background: 'linear-gradient(90deg, #fb7185, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', wordBreak: 'break-word'}}>Passion Behind Influence Hub</span>
                  <audio controls className="w-full rounded-xl bg-white/80 shadow-inner z-10 mt-1 mb-0 h-10">
                    <source src="/audios/Passion behind Influence Hub.m4a" type="audio/mp4" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
            {/* Audio Section End */}

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center bounce-gentle" style={{ animationDelay: '0.9s' }}>
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-300">Articles</div>
              </div>
              <div className="text-center bounce-gentle" style={{ animationDelay: '1.2s' }}>
                <Video className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm text-gray-300">Videos</div>
              </div>
              <div className="text-center bounce-gentle" style={{ animationDelay: '1.5s' }}>
                <Users className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                <div className="text-2xl font-bold">1K+</div>
                <div className="text-sm text-gray-300">Community</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-600 to-black rounded-2xl blur-xl opacity-30 pulse-glow"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-hover">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center">
                      <Avatar className="w-48 h-48 border-4 border-blue-400 shadow-lg rounded-none bg-transparent">
                        <AvatarImage src="/profilepic.jpg" alt="Ronald T. Sambona" className="object-cover w-full h-full rounded-none" />
                        <AvatarFallback className="rounded-none">RT</AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Ronald T. Sambona</h3>
                    <p className="text-gray-300">Educator • Journalist • Women's Advocate</p>
                  </div>
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start space-x-3 fade-in-up" style={{ animationDelay: '1.8s' }}>
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                      <p>Dedicated to promoting equitable education and empowering women</p>
                    </div>
                    <div className="flex items-start space-x-3 fade-in-up" style={{ animationDelay: '2.1s' }}>
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                      <p>Content creator focusing on socio-economic issues</p>
                    </div>
                    <div className="flex items-start space-x-3 fade-in-up" style={{ animationDelay: '2.4s' }}>
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                      <p>Public speaker and educational advocate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
