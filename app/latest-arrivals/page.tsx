import Container from "@/components/container";
import Link from "next/link";
import ProductGrid from "./_components/ProductGrid";

const LatestArrivalsPage = () => {
  return (
    <Container>
      <div className="py-10 md:py-20">
        <header className="flex items-center justify-between   mb-5 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Latest Arrivals</h2>
          <Link
            href="/latest-arrivals"
            className="px-4 py-2 text-sm font-medium border rounded"
          >
            View All
          </Link>
        </header>

        <ProductGrid />
      </div>
    </Container>
  );
};
export default LatestArrivalsPage;
