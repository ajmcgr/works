import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-headline mb-8 leading-tight text-black">
              Ready to shape your story?
            </h1>
            <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-normal text-gray-600 leading-relaxed">
              Let's discuss how strategic public relations can elevate your brand.
            </p>
            <a
              href="mailto:alex@worksapp.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#136ed5', borderRadius: '.75rem' }}
            >
              Contact Us
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
            <p className="mt-6 text-sm text-gray-500">
              Or email us directly at{" "}
              <a href="mailto:alex@worksapp.com" className="underline">alex@worksapp.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
