"use client";

import { useState } from "react";
import {
  Film,
  Wand2,
  Video,
  Music,
  Users,
  Sparkles,
  Download,
  Play,
  Settings,
  FileText,
  Palette,
  ImageIcon,
  Mic
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("script");
  const [scriptText, setScriptText] = useState("");
  const [filmTitle, setFilmTitle] = useState("");
  const [genre, setGenre] = useState("action");
  const [duration, setDuration] = useState("90");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <header className="border-b border-purple-700/30 bg-black/30 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Film className="w-8 h-8 text-purple-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Film Studio
              </h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition">Projets</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition">Bibliothèque</a>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition">
                Nouveau Film
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Créez votre long métrage avec l&apos;IA
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            La plateforme complète pour réaliser des films professionnels grâce à l&apos;intelligence artificielle
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: FileText, title: "Scénario IA", desc: "Générez des scripts professionnels" },
            { icon: Video, title: "Génération Vidéo", desc: "Créez des scènes cinématographiques" },
            { icon: Users, title: "Personnages IA", desc: "Acteurs virtuels réalistes" },
            { icon: Music, title: "Bande Originale", desc: "Musique et effets sonores" },
            { icon: Palette, title: "Color Grading", desc: "Correction colorimétrique automatique" },
            { icon: Mic, title: "Voix Off & Doublage", desc: "Synthèse vocale naturelle" },
            { icon: Sparkles, title: "Effets Spéciaux", desc: "VFX générés par IA" },
            { icon: Download, title: "Export 4K", desc: "Qualité cinéma" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-black/40 backdrop-blur-sm border border-purple-700/30 rounded-xl p-6 hover:border-purple-500/50 transition">
              <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Studio Interface */}
        <div className="bg-black/40 backdrop-blur-sm border border-purple-700/30 rounded-2xl overflow-hidden">
          {/* Project Setup */}
          <div className="p-6 border-b border-purple-700/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Titre du film</label>
                <input
                  type="text"
                  value={filmTitle}
                  onChange={(e) => setFilmTitle(e.target.value)}
                  placeholder="Ex: L'Odyssée Stellaire"
                  className="w-full bg-gray-900/50 border border-purple-700/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Genre</label>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full bg-gray-900/50 border border-purple-700/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="action">Action</option>
                  <option value="scifi">Science-Fiction</option>
                  <option value="drama">Drame</option>
                  <option value="comedy">Comédie</option>
                  <option value="thriller">Thriller</option>
                  <option value="romance">Romance</option>
                  <option value="horror">Horreur</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Durée (minutes)</label>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-gray-900/50 border border-purple-700/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-purple-700/30 overflow-x-auto">
            {[
              { id: "script", label: "Scénario", icon: FileText },
              { id: "characters", label: "Personnages", icon: Users },
              { id: "scenes", label: "Scènes", icon: Video },
              { id: "audio", label: "Audio", icon: Music },
              { id: "effects", label: "Effets", icon: Sparkles },
              { id: "export", label: "Export", icon: Download }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 transition ${
                  activeTab === tab.id
                    ? "bg-purple-600/20 border-b-2 border-purple-400 text-purple-400"
                    : "text-gray-400 hover:text-purple-300"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "script" && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">Écriture du scénario</h3>
                  <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
                    <Wand2 className="w-4 h-4" />
                    <span>Générer avec IA</span>
                  </button>
                </div>
                <textarea
                  value={scriptText}
                  onChange={(e) => setScriptText(e.target.value)}
                  placeholder="Entrez votre synopsis ou laissez l'IA générer un scénario complet...&#10;&#10;Ex: Un astronaute solitaire découvre une civilisation ancienne sur Mars..."
                  className="w-full h-96 bg-gray-900/50 border border-purple-700/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 resize-none font-mono"
                />
                <div className="flex space-x-4">
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition">
                    Importer un script
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition">
                    Analyse de structure
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition">
                    Suggestions IA
                  </button>
                </div>
              </div>
            )}

            {activeTab === "characters" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">Création de personnages</h3>
                  <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
                    <Wand2 className="w-4 h-4" />
                    <span>Créer un personnage IA</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Protagonist", role: "Héros principal", age: "32 ans" },
                    { name: "Antagonist", role: "Vilain", age: "45 ans" },
                    { name: "Sidekick", role: "Allié", age: "28 ans" }
                  ].map((char, idx) => (
                    <div key={idx} className="bg-gray-900/50 border border-purple-700/30 rounded-lg p-4">
                      <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center">
                        <Users className="w-16 h-16 text-purple-400/50" />
                      </div>
                      <h4 className="text-white font-semibold mb-1">{char.name}</h4>
                      <p className="text-sm text-gray-400 mb-1">{char.role}</p>
                      <p className="text-sm text-gray-500">{char.age}</p>
                      <div className="mt-4 flex space-x-2">
                        <button className="flex-1 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 px-3 py-1 rounded text-sm transition">
                          Modifier
                        </button>
                        <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition">
                          <Settings className="w-4 h-4 mx-auto" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "scenes" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">Génération de scènes</h3>
                  <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
                    <Video className="w-4 h-4" />
                    <span>Générer une scène</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {[
                    { scene: "Scène 1: Ouverture", duration: "2:30", status: "Rendu terminé" },
                    { scene: "Scène 2: Introduction du héros", duration: "3:45", status: "En cours..." },
                    { scene: "Scène 3: Premier conflit", duration: "5:20", status: "En attente" }
                  ].map((scene, idx) => (
                    <div key={idx} className="bg-gray-900/50 border border-purple-700/30 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-32 h-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-purple-400/50" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{scene.scene}</h4>
                          <p className="text-sm text-gray-400">Durée: {scene.duration}</p>
                          <p className="text-sm text-purple-400">{scene.status}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition">
                          <Play className="w-5 h-5" />
                        </button>
                        <button className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg transition">
                          <Settings className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "audio" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">Production audio</h3>
                  <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
                    <Music className="w-4 h-4" />
                    <span>Générer la musique</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 border border-purple-700/30 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Bande originale</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Thème principal</span>
                        <button className="text-purple-400 hover:text-purple-300">
                          <Play className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Musique d&apos;action</span>
                        <button className="text-purple-400 hover:text-purple-300">
                          <Play className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Ambiance dramatique</span>
                        <button className="text-purple-400 hover:text-purple-300">
                          <Play className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 border border-purple-700/30 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Voix et dialogues</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Narrateur</span>
                        <button className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 px-3 py-1 rounded text-sm transition">
                          Configurer
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Personnage principal</span>
                        <button className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 px-3 py-1 rounded text-sm transition">
                          Configurer
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Effets sonores</span>
                        <button className="bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 px-3 py-1 rounded text-sm transition">
                          Bibliothèque
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "effects" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">Effets spéciaux et post-production</h3>
                  <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
                    <Sparkles className="w-4 h-4" />
                    <span>Appliquer les effets</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: "Color Grading", desc: "Correction colorimétrique cinématique" },
                    { name: "VFX", desc: "Effets visuels avancés" },
                    { name: "Transitions", desc: "Transitions fluides entre scènes" },
                    { name: "Stabilisation", desc: "Stabilisation d'image IA" },
                    { name: "Upscaling 4K", desc: "Amélioration de résolution" },
                    { name: "Slow Motion", desc: "Ralenti cinématographique" }
                  ].map((effect, idx) => (
                    <div key={idx} className="bg-gray-900/50 border border-purple-700/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">{effect.name}</h4>
                      <p className="text-sm text-gray-400 mb-4">{effect.desc}</p>
                      <button className="w-full bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 px-3 py-2 rounded transition">
                        Activer
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "export" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">Exportation finale</h3>
                  <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
                    <Download className="w-4 h-4" />
                    <span>Exporter le film</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 border border-purple-700/30 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Format d&apos;export</h4>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="radio" name="format" className="text-purple-600" defaultChecked />
                        <span className="text-gray-300">MP4 (H.264) - 4K</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="radio" name="format" className="text-purple-600" />
                        <span className="text-gray-300">MOV (ProRes) - 4K</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="radio" name="format" className="text-purple-600" />
                        <span className="text-gray-300">MP4 (H.265) - 8K</span>
                      </label>
                    </div>
                  </div>
                  <div className="bg-gray-900/50 border border-purple-700/30 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Statistiques du projet</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Scènes générées:</span>
                        <span className="text-white">24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Durée totale:</span>
                        <span className="text-white">87:32</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Personnages:</span>
                        <span className="text-white">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Résolution:</span>
                        <span className="text-white">3840x2160</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Taille estimée:</span>
                        <span className="text-white">12.4 GB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* AI Models Section */}
        <div className="mt-12 bg-black/40 backdrop-blur-sm border border-purple-700/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Technologies IA intégrées</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Script AI", model: "GPT-4 / Claude", use: "Génération de scénarios" },
              { name: "Video AI", model: "Runway / Pika", use: "Création de scènes vidéo" },
              { name: "Voice AI", model: "ElevenLabs", use: "Synthèse vocale réaliste" },
              { name: "Music AI", model: "Suno / Udio", use: "Composition musicale" }
            ].map((tech, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold mb-1">{tech.name}</h4>
                <p className="text-sm text-purple-400 mb-1">{tech.model}</p>
                <p className="text-xs text-gray-500">{tech.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-700/30 bg-black/30 backdrop-blur-xl mt-12">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2025 AI Film Studio - Créez l&apos;impossible avec l&apos;intelligence artificielle</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
