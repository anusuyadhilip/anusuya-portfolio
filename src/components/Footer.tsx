const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-secondary/50 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground">
          Built by <span className="text-foreground font-medium">Anusuya P</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
