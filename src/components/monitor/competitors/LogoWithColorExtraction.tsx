import { useState, useEffect, useRef } from "react";
import ColorThief from "colorthief";

interface LogoWithColorExtractionProps {
  imageUrl: string;
  alt: string;
  competitorId: string;
  onColorExtracted: (id: string, color: string) => void;
  brandDomain: string;
}

export const LogoWithColorExtraction = ({
  imageUrl,
  alt,
  competitorId,
  onColorExtracted,
  brandDomain,
}: LogoWithColorExtractionProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const extractedRef = useRef(false);
  const colorThiefRef = useRef<ColorThief | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);
  const [imageError, setImageError] = useState(false);
  const [triedFallback, setTriedFallback] = useState(false);

  // Reset error state and sync URL when imageUrl prop changes
  useEffect(() => {
    setImageError(false);
    setTriedFallback(false);
    setCurrentImageUrl(imageUrl);
    extractedRef.current = false; // Reset extraction flag when URL changes
  }, [imageUrl]);

  // Check if image URL is valid on mount
  useEffect(() => {
    if (!imageUrl || imageUrl.trim() === "") {
      setImageError(true);
      if (!extractedRef.current) {
        extractedRef.current = true;
        onColorExtracted(competitorId, "#6366f1");
      }
    }
  }, [imageUrl, competitorId, onColorExtracted]);

  useEffect(() => {
    if (!colorThiefRef.current) {
      colorThiefRef.current = new ColorThief();
    }

    const extractColor = () => {
      if (
        extractedRef.current ||
        !imgRef.current ||
        !colorThiefRef.current ||
        imageError
      )
        return;

      const img = imgRef.current;

      try {
        // ColorThief requires the image to be fully loaded
        if (img.complete && img.naturalWidth > 0 && !imageError) {
          const color = colorThiefRef.current.getColor(img);
          if (color && Array.isArray(color) && color.length.length === 3) {
            const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            onColorExtracted(competitorId, rgbColor);
            extractedRef.current = true;
          } else {
            onColorExtracted(competitorId, "#6366f1");
            extractedRef.current = true;
          }
        }
      } catch (error) {
        // Fallback to default color on error
        if (!extractedRef.current) {
          onColorExtracted(competitorId, "#6366f1");
          extractedRef.current = true;
        }
      }
    };

    // If image is already loaded (from cache)
    if (imgRef.current?.complete && !imageError) {
      extractColor();
    }
  }, [competitorId, onColorExtracted, imageError]);

  const handleLoad = () => {
    if (
      !extractedRef.current &&
      imgRef.current &&
      colorThiefRef.current &&
      !imageError
    ) {
      try {
        const color = colorThiefRef.current.getColor(imgRef.current);
        if (color && Array.isArray(color) && color.length === 3) {
          const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
          onColorExtracted(competitorId, rgbColor);
          extractedRef.current = true;
        }
      } catch (e) {
        if (!extractedRef.current) {
          onColorExtracted(competitorId, "#6366f1");
          extractedRef.current = true;
        }
      }
    }
  };

  const handleError = () => {
    if (!triedFallback) {
      // Try clearbit logo API as fallback
      // Try to get clean domain
      let domain = brandDomain;
      if (!domain || domain.trim() === "") {
        domain = alt.toLowerCase().replace(/[^a-z0-9]/g, "") + ".com";
      }
      setCurrentImageUrl(`https://logo.clearbit.com/${domain}`);
      setTriedFallback(true);
      setImageError(false); // Reset error to try new URL
    } else {
      setImageError(true);
      if (!extractedRef.current) {
        onColorExtracted(competitorId, "#6366f1");
        extractedRef.current = true;
      }
    }
  };

  if (imageError) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f1f2f4",
          color: "#8c9196",
          fontSize: "12px",
          fontWeight: 600,
        }}
      >
        {alt.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      crossOrigin="anonymous"
      src={currentImageUrl}
      alt={alt}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block",
        // Force re-render if URL changes
        imageRendering: "auto",
        opacity: imageError ? 0 : 1,
      }}
    />
  );
};
