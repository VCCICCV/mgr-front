import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { productData } from "@/lib/constant";
export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <div className="grid grid-cols-3 gap-4">
                {productData.map((car, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <section key={index}>
                        <div>
                            <Card car={car} />
                        </div>
                    </section>
                ))}
            </div>
            {/* 对比 */}
            <Toaster />
            <Footer />
        </main>
    );
}
