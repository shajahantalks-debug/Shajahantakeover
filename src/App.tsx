import { useState, useEffect } from 'react';
import {
  Mic,
  Truck,
  Package,
  BarChart3,
  FileText,
  Users,
  Calculator,
  Shield,
  Smartphone,
  Settings,
  Zap,
  Globe,
  ChevronRight,
  Play,
  Star,
  Check,
  ArrowRight,
  Menu,
  X,
  MessageSquare,
  MapPin,
  Clock,
  TrendingUp,
  ShoppingCart,
  Building2,
  Mail,
  CreditCard,
  Barcode,
  Layers,
  Bell,
  Eye,
  Send,
  ChevronDown,
  Bot,
  Sparkles,
  Camera,
  Edit3,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [activeDashboardTab, setActiveDashboardTab] = useState('billing');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'AI Voice Billing', href: '#voice-billing' },
    { name: 'Delivery Tracking', href: '#delivery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Industries', href: '#industries' },
  ];

  const features = [
    {
      icon: Mic,
      title: 'AI Voice-to-Bill',
      description: 'Simply speak your invoice details. Our AI converts voice notes to professional invoices instantly.',
      color: 'from-royal-500 to-royal-600',
      lightColor: 'bg-royal-50',
      iconColor: 'text-royal-600',
    },
    {
      icon: Truck,
      title: 'Live Delivery Tracking',
      description: 'Real-time GPS tracking for every delivery. Know exactly where your orders are.',
      color: 'from-emerald-500 to-emerald-600',
      lightColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      icon: Package,
      title: 'Smart Inventory',
      description: 'Never run out of stock. Auto-reorder alerts, batch management, and multi-godown support.',
      color: 'from-amber-500 to-orange-500',
      lightColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      icon: BarChart3,
      title: 'Business Analytics',
      description: 'AI-powered insights for sales forecasting, stock predictions, and growth opportunities.',
      color: 'from-rose-500 to-pink-600',
      lightColor: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
  ];

  const invoiceTypes = [
    'GST Invoice',
    'Tax Invoice',
    'Bill of Supply',
    'Proforma Invoice',
    'Quotation',
    'Estimate',
    'Delivery Challan',
    'Purchase Order',
    'Credit Note',
    'Debit Note',
    'Recurring Invoice',
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹499',
      period: '/month',
      description: 'Perfect for small businesses starting their digital journey',
      features: [
        'Up to 100 invoices/month',
        'Basic inventory management',
        'GST reports',
        'Email support',
        'Mobile app access',
        '1 User',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '₹999',
      period: '/month',
      description: 'For growing businesses that need more power',
      features: [
        'Unlimited invoices',
        'AI Voice-to-Bill',
        'Live delivery tracking',
        'Advanced inventory',
        'Priority support',
        'Up to 5 users',
        'WhatsApp integration',
        'API access',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '₹2,499',
      period: '/month',
      description: 'Complete solution for large operations',
      features: [
        'Everything in Professional',
        'Unlimited users',
        'Multi-branch support',
        'Custom integrations',
        'Dedicated account manager',
        'On-site training',
        'White-label option',
        'SLA guarantee',
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Owner, Sri Murugan Stores',
      location: 'Chennai',
      content: 'Voice billing has changed everything for us. My staff can create invoices just by speaking. We used to spend hours on billing, now it takes seconds.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379005.jpg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Priya Sharma',
      role: 'Director, Sharma Traders',
      location: 'Delhi',
      content: 'The live delivery tracking feature has reduced customer complaints by 90%. Customers can see exactly where their order is. Brilliant feature!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291.jpg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Amit Patel',
      role: 'CEO, Gujarat Distributors',
      location: 'Ahmedabad',
      content: 'Inventory management was our biggest headache. BillFlow AI automated everything. Stock alerts, reorders, batch tracking - all in one place.',
      rating: 5,
      image: 'https://images.pexels.com/photos/220453.jpg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  const industries = [
    { name: 'Retail', icon: ShoppingCart, color: 'text-royal-600' },
    { name: 'Wholesale', icon: Building2, color: 'text-emerald-600' },
    { name: 'Manufacturing', icon: Settings, color: 'text-amber-600' },
    { name: 'Distribution', icon: Truck, color: 'text-rose-600' },
    { name: 'FMCG', icon: Package, color: 'text-royal-600' },
    { name: 'Pharma', icon: Shield, color: 'text-emerald-600' },
  ];

  const integrations = [
    { name: 'WhatsApp', icon: MessageSquare },
    { name: 'Tally', icon: Calculator },
    { name: 'Razorpay', icon: CreditCard },
    { name: 'UPI', icon: Smartphone },
    { name: 'Google Maps', icon: MapPin },
    { name: 'SMS Gateway', icon: Send },
    { name: 'Email', icon: Mail },
    { name: 'Excel', icon: FileText },
  ];

  const stats = [
    { value: '50,000+', label: 'Active Businesses' },
    { value: '2M+', label: 'Invoices Created' },
    { value: '₹500Cr+', label: 'Transaction Volume' },
    { value: '99.9%', label: 'Uptime' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-600 to-emerald-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-slate-900">
                BillFlow<span className="text-royal-600">AI</span>
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <button className="nav-link">Login</button>
              <button className="btn-primary">Start Free Trial</button>
            </div>

            <button
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 animate-fade-in-down">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-slate-600 hover:text-royal-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <hr className="border-slate-200" />
              <button className="block w-full text-slate-600 hover:text-royal-600 font-medium text-left">
                Login
              </button>
              <button className="btn-primary w-full">Start Free Trial</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-royal-900 to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40" />

        <div className="absolute top-20 left-10 w-72 h-72 bg-royal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6 animate-fade-in-down">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>India's #1 AI-Powered Billing Platform</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
                India's Smartest
                <span className="block mt-2 bg-gradient-to-r from-royal-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  AI Billing Software
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animate-delay-100">
                Create GST invoices, manage inventory, track deliveries live, convert voice notes into complete invoices, and run your entire business from one platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up animate-delay-200">
                <button className="btn-primary flex items-center justify-center gap-2 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="btn-secondary flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-white/80 animate-fade-in-up animate-delay-300">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Right Column - Dashboard Preview */}
            <div className="relative animate-fade-in animate-delay-400">
              <div className="relative z-10">
                <DashboardPreview activeTab={activeDashboardTab} setActiveTab={setActiveDashboardTab} />
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl animate-float">
                <Mic className="w-10 h-10 text-white" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-xl animate-bounce-subtle">
                <Truck className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-royal-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Everything You Need to
              <span className="block bg-gradient-to-r from-royal-600 to-emerald-500 bg-clip-text text-transparent">
                Run Your Business
              </span>
            </h2>
            <p className="section-subtitle">
              One powerful platform for billing, inventory, delivery, accounting, and business intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card feature-card-hover cursor-pointer ${
                  activeFeature === index ? 'ring-2 ring-royal-500 ring-offset-2' : ''
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.lightColor} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
                <div className="mt-4 flex items-center text-royal-600 font-medium group-hover:gap-3 transition-all">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Voice Billing Section */}
      <section id="voice-billing" className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-royal-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M20%2020.5V18H0v-2h20v-2.5c0-2.76%202.24-5%205-5s5%202.24%205%205-2.24%205-5%205-5-2.24-5-5z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <Mic className="w-4 h-4" />
                <span>Flagship Feature</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Voice-to-Bill
                <span className="block text-emerald-400 mt-2">Just Speak, We Invoice</span>
              </h2>

              <p className="text-lg text-slate-300 mb-8">
                Simply send a voice note like "Invoice for Sri Murugan Stores. 20 boxes Sandal Agarbatti at ₹150. 10 Camphor packets at ₹60." and our AI will automatically create a complete GST invoice.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Convert speech to text accurately',
                  'Identify customer & products',
                  'Calculate GST automatically',
                  'Generate professional PDF invoices',
                  'Share via WhatsApp, Email, Print',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-white/90">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn-accent inline-flex items-center gap-2">
                Try Voice Billing Now
                <Mic className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <VoiceBillingDemo
                isListening={isListening}
                setIsListening={setIsListening}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Invoice Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">All Invoice Types Supported</h2>
            <p className="section-subtitle">
              Create any type of document your business needs, all GST-compliant.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {invoiceTypes.map((type, index) => (
              <div
                key={index}
                className="px-5 py-3 bg-slate-100 hover:bg-royal-100 hover:text-royal-700 rounded-xl text-slate-700 font-medium transition-all cursor-pointer"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Delivery Tracking */}
      <section id="delivery" className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <DeliveryTrackingDemo />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal-100 text-royal-700 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                <span>Real-Time Tracking</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Live Delivery Tracking
                <span className="block text-royal-600 mt-2">Know Where Every Order Is</span>
              </h2>

              <p className="text-lg text-slate-600 mb-8">
                Every invoice automatically becomes a delivery order. Track your deliveries in real-time with GPS, assign drivers, and keep customers informed.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: MapPin, label: 'Live GPS Tracking' },
                  { icon: Clock, label: 'ETA Estimates' },
                  { icon: Users, label: 'Driver Assignment' },
                  { icon: Truck, label: 'Route Optimization' },
                  { icon: MessageSquare, label: 'WhatsApp Tracking Link' },
                  { icon: Camera, label: 'Delivery Proof Upload' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-royal-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Management */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-6">
                <Package className="w-4 h-4" />
                <span>Smart Inventory</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Never Run Out of Stock
                <span className="block text-amber-600 mt-2">Smart Inventory Management</span>
              </h2>

              <p className="text-lg text-slate-600 mb-8">
                Automated stock alerts, batch management, multi-godown support, and intelligent reordering. Your inventory manages itself.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Bell, label: 'Low Stock Alerts', desc: 'Get notified before stock runs out' },
                  { icon: Layers, label: 'Batch Management', desc: 'Track batches and expiry dates' },
                  { icon: Barcode, label: 'Barcode Support', desc: 'Scan and print barcodes easily' },
                  { icon: FileText, label: 'Excel Import/Export', desc: 'Bulk upload and data sync' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.label}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <InventoryDemo />
            </div>
          </div>
        </div>
      </section>

      {/* AI Business Assistant */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-royal-600 to-royal-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <AIAssistantDemo />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                <span>AI-Powered Assistant</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your AI Business
                <span className="block text-emerald-400 mt-2">Co-Pilot</span>
              </h2>

              <p className="text-lg text-royal-100 mb-8">
                Ask anything about your business. Create invoices, check inventory, view reports, predict stock shortages - just ask.
              </p>

              <div className="space-y-4">
                {[
                  '"How much stock of Sandal Agarbatti is left?"',
                  '"Create an invoice for Sharma Traders"',
                  '"Show pending payments this month"',
                  '"Which products are running low?"',
                  '"Generate last month\'s sales report"',
                ].map((example, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white/90 border border-white/10"
                  >
                    <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="italic">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GST & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">GST & Tax Compliance</h2>
            <p className="section-subtitle">
              Stay compliant with all GST regulations. Generate reports, file returns, and maintain records effortlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'GST Billing', icon: FileText },
              { label: 'GSTR-1', icon: FileText },
              { label: 'GSTR-2', icon: FileText },
              { label: 'GSTR-3B', icon: FileText },
              { label: 'e-Invoice', icon: Globe },
              { label: 'e-Way Bill', icon: Truck },
              { label: 'ITC Reports', icon: Calculator },
              { label: 'GST Analytics', icon: BarChart3 },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-royal-300 hover:bg-royal-50 transition-all cursor-pointer"
              >
                <item.icon className="w-5 h-5 text-royal-600" />
                <span className="font-medium text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Powerful Integrations</h2>
            <p className="section-subtitle">
              Connect with your favorite tools and services. Everything works together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-slate-100"
              >
                <div className="w-10 h-10 rounded-lg bg-royal-100 flex items-center justify-center">
                  <integration.icon className="w-5 h-5 text-royal-600" />
                </div>
                <span className="font-medium text-slate-700">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">
              Choose the plan that fits your business. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-royal-600 to-royal-700 text-white shadow-xl scale-105 z-10'
                    : 'bg-white border-2 border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>

                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? 'text-royal-200' : 'text-slate-600'}>{plan.period}</span>
                </div>

                <p className={`mb-6 ${plan.popular ? 'text-royal-100' : 'text-slate-600'}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className={`w-5 h-5 ${plan.popular ? 'text-emerald-400' : 'text-emerald-500'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-slate-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-royal-600 hover:bg-royal-50'
                      : 'bg-royal-600 text-white hover:bg-royal-700'
                  }`}
                >
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Trusted Across Industries</h2>
            <p className="section-subtitle">
              BillFlow AI adapts to your industry. From retail to distribution, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-slate-100"
              >
                <industry.icon className={`w-10 h-10 ${industry.color} mb-3`} />
                <span className="font-medium text-slate-700">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Loved by Businesses Across India</h2>
            <p className="section-subtitle">
              See what business owners say about BillFlow AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-sm text-slate-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise-Grade Security
                <span className="block text-emerald-400 mt-2">Your Data is Safe</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Bank-level encryption, automatic backups, and role-based access control. Your business data is always protected.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: 'SSL Security' },
                { icon: Layers, label: 'Cloud Backup' },
                { icon: Smartphone, label: '2FA Authentication' },
                { icon: Eye, label: 'Role-Based Access' },
                { icon: Calculator, label: 'Data Encryption' },
                { icon: Clock, label: 'Daily Backups' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                  <span className="text-white font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-royal-600 via-royal-700 to-royal-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-royal-100 mb-10 max-w-2xl mx-auto">
            Join 50,000+ businesses using BillFlow AI. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-royal-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-royal-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Start Free Trial
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
              Book a Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-600 to-emerald-500 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  BillFlow<span className="text-royal-400">AI</span>
                </span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                India's smartest AI-powered billing and business management platform. Create invoices, manage inventory, track deliveries, and run your entire business from one place.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                  <MessageSquare className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {['Features', 'AI Voice Billing', 'Delivery Tracking', 'Pricing', 'Mobile App', 'Integrations'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Blog', 'Press', 'Partners', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {['Help Center', 'Documentation', 'API Reference', 'Status', 'Security', 'Privacy Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 BillFlow AI. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Dashboard Preview Component
function DashboardPreview({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: 'billing', label: 'Billing' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'delivery', label: 'Delivery' },
    { id: 'analytics', label: 'Analytics' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
      {/* Tab Bar */}
      <div className="flex border-b border-slate-200 bg-slate-50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-white text-royal-600 border-b-2 border-royal-600'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dashboard Content */}
      <div className="p-4 bg-slate-50">
        {activeTab === 'billing' && <BillingDashboard />}
        {activeTab === 'inventory' && <InventoryDashboard />}
        {activeTab === 'delivery' && <DeliveryDashboard />}
        {activeTab === 'analytics' && <AnalyticsDashboard />}
      </div>
    </div>
  );
}

function BillingDashboard() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="col-span-2 bg-gradient-to-br from-royal-500 to-royal-600 rounded-xl p-4 text-white">
        <div className="text-royal-100 text-sm mb-1">Today's Revenue</div>
        <div className="text-2xl font-bold">₹1,24,500</div>
        <div className="text-emerald-300 text-sm mt-1">+12.5% from yesterday</div>
      </div>
      <div className="bg-white rounded-xl p-3 border border-slate-100">
        <div className="flex items-center gap-2 text-slate-600 text-sm mb-1">
          <FileText className="w-4 h-4" />
          <span>Invoices</span>
        </div>
        <div className="text-xl font-bold text-slate-900">42</div>
      </div>
      <div className="bg-white rounded-xl p-3 border border-slate-100">
        <div className="flex items-center gap-2 text-slate-600 text-sm mb-1">
          <Users className="w-4 h-4" />
          <span>Customers</span>
        </div>
        <div className="text-xl font-bold text-slate-900">8</div>
      </div>
      <div className="col-span-2 bg-white rounded-xl p-3 border border-slate-100">
        <div className="text-slate-600 text-sm mb-2">Recent Invoices</div>
        <div className="space-y-2">
          {[
            { id: 'INV-1024', customer: 'Sri Murugan Stores', amount: '₹12,500', status: 'paid' },
            { id: 'INV-1023', customer: 'Sharma Traders', amount: '₹8,750', status: 'pending' },
          ].map((invoice, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <span className="text-slate-900 font-medium">{invoice.id}</span>
              <span className="text-slate-600">{invoice.customer}</span>
              <span className="font-semibold text-slate-900">{invoice.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InventoryDashboard() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="col-span-2 bg-white rounded-xl p-3 border border-slate-100">
        <div className="text-slate-600 text-sm mb-2">Stock Overview</div>
        <div className="flex items-end gap-1 h-16">
          {[60, 80, 45, 90, 70, 55, 85].map((h, i) => (
            <div key={i} className="flex-1 bg-royal-500 rounded-t" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl p-3 border border-slate-100">
        <div className="flex items-center gap-2 text-slate-600 text-sm mb-1">
          <Package className="w-4 h-4" />
          <span>Total Products</span>
        </div>
        <div className="text-xl font-bold text-slate-900">248</div>
      </div>
      <div className="bg-amber-50 rounded-xl p-3 border border-amber-200">
        <div className="flex items-center gap-2 text-amber-600 text-sm mb-1">
          <Bell className="w-4 h-4" />
          <span>Low Stock</span>
        </div>
        <div className="text-xl font-bold text-amber-700">12</div>
      </div>
      <div className="col-span-2 bg-white rounded-xl p-3 border border-slate-100">
        <div className="text-slate-600 text-sm mb-2">Top Products</div>
        <div className="space-y-1">
          {['Sandal Agarbatti (482)', 'Camphor (156)', 'Dhoop Sticks (89)'].map((item, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <span className="text-slate-900">{item}</span>
              <span className="text-emerald-600 font-medium">In Stock</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DeliveryDashboard() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="col-span-2 bg-emerald-500 rounded-xl p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-emerald-100 text-sm mb-1">Active Deliveries</div>
            <div className="text-2xl font-bold">8</div>
          </div>
          <Truck className="w-10 h-10 text-emerald-200" />
        </div>
      </div>
      <div className="bg-white rounded-xl p-3 border border-slate-100">
        <div className="text-slate-600 text-sm mb-1">Completed</div>
        <div className="text-xl font-bold text-emerald-600">24</div>
      </div>
      <div className="bg-white rounded-xl p-3 border border-slate-100">
        <div className="text-slate-600 text-sm mb-1">In Transit</div>
        <div className="text-xl font-bold text-amber-600">6</div>
      </div>
      <div className="col-span-2 bg-white rounded-xl p-3 border border-slate-100">
        <div className="text-slate-600 text-sm mb-2">Live Tracking</div>
        <div className="w-full h-24 bg-slate-100 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Cpath%20d%3D%22M10%2040%20L30%2030%20L50%2040%20L70%2035%20L90%2045%22%20stroke%3D%22%233b82f6%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3C/svg%3E')]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 bg-royal-500 rounded-full flex items-center justify-center animate-pulse">
              <MapPin className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsDashboard() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="col-span-2 bg-white rounded-xl p-3 border border-slate-100">
        <div className="text-slate-600 text-sm mb-2">Revenue Trend</div>
        <div className="flex items-end gap-1 h-20">
          {[40, 55, 70, 45, 80, 65, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-royal-500 to-royal-400 rounded-t"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-slate-500 mt-2">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
      <div className="bg-white rounded-xl p-3 border border-slate-100">
        <div className="text-slate-600 text-sm mb-1">Monthly Sales</div>
        <div className="text-xl font-bold text-slate-900">₹18.5L</div>
        <div className="text-emerald-600 text-xs">+15.2%</div>
      </div>
      <div className="bg-white rounded-xl p-3 border border-slate-100">
        <div className="text-slate-600 text-sm mb-1">Avg. Order</div>
        <div className="text-xl font-bold text-slate-900">₹2,950</div>
        <div className="text-emerald-600 text-xs">+8.7%</div>
      </div>
    </div>
  );
}

// Voice Billing Demo Component
function VoiceBillingDemo({
  isListening,
  setIsListening,
}: {
  isListening: boolean;
  setIsListening: (v: boolean) => void;
}) {
  const [transcript, setTranscript] = useState('');
  const [showInvoice, setShowInvoice] = useState(false);

  const sampleTranscript =
    'Invoice for Sri Murugan Stores. 20 boxes Sandal Agarbatti at ₹150. 10 Camphor packets at ₹60.';

  const handleMicClick = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setTranscript(sampleTranscript);
      setShowInvoice(true);
    }, 2000);
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 space-y-4">
      <div className="text-center">
        <button
          onClick={handleMicClick}
          className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transition-all ${
            isListening
              ? 'bg-emerald-500 animate-pulse'
              : 'bg-white/20 hover:bg-white/30'
          }`}
        >
          <Mic className={`w-10 h-10 ${isListening ? 'text-white' : 'text-white/80'}`} />
        </button>
        <p className="text-white/60 text-sm mt-3">
          {isListening ? 'Listening...' : 'Tap to speak'}
        </p>
      </div>

      {transcript && (
        <div className="bg-white/10 rounded-xl p-4 border border-white/10">
          <div className="text-white/60 text-xs mb-1">Transcript:</div>
          <p className="text-white">{transcript}</p>
        </div>
      )}

      {showInvoice && (
        <div className="bg-white rounded-xl p-4 text-slate-900 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="font-semibold">TAX INVOICE</div>
            <div className="text-sm text-slate-600">INV-1024</div>
          </div>
          <div className="text-sm">
            <div className="text-slate-600">Bill To:</div>
            <div className="font-medium">Sri Murugan Stores</div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-dashed border-slate-200 pb-1">
              <span>Sandal Agarbatti (20 box)</span>
              <span>₹3,000</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-slate-200 pb-1">
              <span>Camphor (10 pkt)</span>
              <span>₹600</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>CGST (9%)</span>
              <span>₹324</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>SGST (9%)</span>
              <span>₹324</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-slate-200">
              <span>Total</span>
              <span>₹4,248</span>
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-emerald-500 text-white rounded-lg text-sm">
              <Check className="w-4 h-4" /> Save
            </button>
            <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm">
              <Edit3 className="w-4 h-4" /> Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Delivery Tracking Demo Component
function DeliveryTrackingDemo() {
  const deliveries = [
    {
      id: 'DEL-101',
      customer: 'Sri Murugan Stores',
      status: 'In Transit',
      eta: '15 mins',
      progress: 75,
      driver: 'Rajesh K.',
    },
    {
      id: 'DEL-102',
      customer: 'Sharma Traders',
      status: 'Out for Delivery',
      eta: '32 mins',
      progress: 45,
      driver: 'Amit P.',
    },
    {
      id: 'DEL-103',
      customer: 'Gujarat Distributors',
      status: 'Preparing',
      eta: '1 hr',
      progress: 15,
      driver: 'Pending',
    },
  ];

  return (
    <div className="space-y-4">
      {deliveries.map((delivery, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-lg border border-slate-100">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="text-sm text-slate-500">{delivery.id}</div>
              <div className="font-semibold text-slate-900">{delivery.customer}</div>
            </div>
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                delivery.progress > 50
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-amber-100 text-amber-700'
              }`}
            >
              {delivery.status}
            </div>
          </div>
          <div className="relative h-2 bg-slate-100 rounded-full mb-2">
            <div
              className="absolute h-full bg-gradient-to-r from-royal-500 to-emerald-500 rounded-full transition-all"
              style={{ width: `${delivery.progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-slate-600">
              <Clock className="w-4 h-4" />
              <span>ETA: {delivery.eta}</span>
            </div>
            <div className="flex items-center gap-1 text-slate-600">
              <MapPin className="w-4 h-4" />
              <span>{delivery.driver}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Inventory Demo Component
function InventoryDemo() {
  const products = [
    { name: 'Sandal Agarbatti', stock: 482, unit: 'boxes', status: 'healthy' },
    { name: 'Camphor Packets', stock: 156, unit: 'packets', status: 'healthy' },
    { name: 'Dhoop Sticks', stock: 23, unit: 'boxes', status: 'low' },
    { name: 'Incense Cones', stock: 8, unit: 'boxes', status: 'critical' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-slate-900">Inventory Status</h3>
        <div className="flex items-center gap-2 text-sm text-emerald-600">
          <TrendingUp className="w-4 h-4" />
          <span>+8.2% this week</span>
        </div>
      </div>
      <div className="space-y-4">
        {products.map((product, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-royal-100 flex items-center justify-center">
                <Package className="w-5 h-5 text-royal-600" />
              </div>
              <div>
                <div className="font-medium text-slate-900">{product.name}</div>
                <div className="text-sm text-slate-500">
                  {product.stock} {product.unit}
                </div>
              </div>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                product.status === 'healthy'
                  ? 'bg-emerald-100 text-emerald-700'
                  : product.status === 'low'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {product.status === 'healthy'
                ? 'In Stock'
                : product.status === 'low'
                ? 'Low Stock'
                : 'Critical'}
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 bg-royal-50 text-royal-600 rounded-xl font-medium hover:bg-royal-100 transition-colors">
        View All Products
      </button>
    </div>
  );
}

// AI Assistant Demo Component
function AIAssistantDemo() {
  const [messages] = useState([
    {
      type: 'user',
      text: 'How much stock of Sandal Agarbatti is left?',
    },
    {
      type: 'ai',
      text: 'You have 482 boxes of Sandal Agarbatti remaining. This is above your minimum stock level of 100 boxes. Would you like me to show the sales trend for this product?',
    },
    {
      type: 'user',
      text: 'Show pending payments this month',
    },
    {
      type: 'ai',
      text: 'You have ₹1,45,000 in pending payments this month across 12 invoices. Top pending: Sharma Traders (₹45,000), Gupta & Sons (₹32,500), Patel Distributors (₹28,000). Would you like me to send payment reminders?',
    },
  ]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4 max-h-96 overflow-y-auto border border-slate-200">
      <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
        <Bot className="w-6 h-6 text-royal-600" />
        <span className="font-semibold text-slate-900">BillFlow AI Assistant</span>
        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs">Online</span>
      </div>
      <div className="space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                msg.type === 'user'
                  ? 'bg-royal-600 text-white rounded-br-none'
                  : 'bg-slate-100 text-slate-900 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
        <input
          type="text"
          placeholder="Ask anything about your business..."
          className="flex-1 px-4 py-2 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-royal-500"
        />
        <button className="p-2 bg-royal-600 text-white rounded-xl hover:bg-royal-700">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default App;
