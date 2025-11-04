import { BookOpen, ArrowLeft, FileText, LifeBuoy, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-foreground mb-12 text-center">
          Key Features
        </h1>

        {/* 1️⃣ Form Automation */}
        <div className="card-base p-8 mb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-secondary" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Form Automation</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fill government forms easily using AI-powered voice and text assistance.
            The app helps auto-populate fields and guides you step by step.
          </p>
        </div>

        {/* 2️⃣ Awareness Feed */}
        <div className="card-base p-8 mb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-secondary" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Awareness Feed</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get updates, news, schemes, and subsidies specific to your region.
            Short, verified cards and infographics make it easy to stay informed.
          </p>
        </div>

        {/* 3️⃣ Guides / Help Page */}
        <div className="card-base p-8 mb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
              <LifeBuoy className="w-8 h-8 text-secondary" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Guides & Help</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Quick how-to guides and helplines: for example, how to file an RTI, apply for pensions,
            or access other government services.
          </p>
        </div>

        {/* 4️⃣ Chatbot Access */}
        <div className="card-base p-8 mb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-secondary" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">AI Chatbot</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The chatbot is always accessible via a floating icon on all pages. It can guide you,
            check your eligibility, and help fill forms in multiple languages.
          </p>
        </div>
      </div>

      {/* Note: Implement a floating chatbot component globally */}
      {/* Example: <FloatingChatbot /> */}
    </div>
  );
}