import React from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTokens } from '../hooks/useTokens';
import { getTokens } from '../app/tokens';

// Example 1: Using tokens in styled components
const StyledCard = styled(Card)(({ theme }) => {
  const tokens = getTokens(theme.palette.mode);
  
  return {
    backgroundColor: tokens.colors.surface.paper,
    border: `1px solid ${tokens.colors.border.default}`,
    borderRadius: tokens.borderRadius.lg,
    padding: tokens.spacing.lg,
    boxShadow: tokens.shadows.md,
    
    '&:hover': {
      borderColor: tokens.colors.border.hover,
      boxShadow: tokens.shadows.lg,
    },
  };
});

// Example 2: Using tokens with sx prop
const SxExample = () => {
  return (
    <Box
      sx={(theme) => {
        const tokens = getTokens(theme.palette.mode);
        return {
          backgroundColor: tokens.colors.surface.background,
          padding: tokens.spacing.xl,
          borderRadius: tokens.borderRadius.md,
          color: tokens.colors.text.primary,
        };
      }}
    >
      <Typography variant="h2">Using tokens with sx prop</Typography>
    </Box>
  );
};

// Example 3: Using tokens with custom hook
const HookExample = () => {
  const tokens = useTokens();
  
  return (
    <div
      style={{
        backgroundColor: tokens.colors.surface.paper,
        padding: tokens.spacing.lg,
        borderRadius: tokens.borderRadius.sm,
        border: `1px solid ${tokens.colors.border.default}`,
        color: tokens.colors.text.primary,
      }}
    >
      <h3 style={{ 
        fontSize: tokens.typography.fontSize.lg,
        fontWeight: tokens.typography.fontWeight.semibold,
        margin: 0,
        marginBottom: tokens.spacing.md,
      }}>
        Using tokens with custom hook
      </h3>
      <p style={{
        fontSize: tokens.typography.fontSize.sm,
        color: tokens.colors.text.secondary,
        lineHeight: tokens.typography.lineHeight.normal,
      }}>
        This example shows how to use the useTokens hook to access design tokens directly in your components.
      </p>
    </div>
  );
};

// Example 4: Color palette showcase
const ColorPalette = () => {
  const tokens = useTokens();
  
  const colorGroups = [
    { name: 'Primary', colors: tokens.colors.primary },
    { name: 'Secondary', colors: tokens.colors.secondary },
    { name: 'Neutral', colors: tokens.colors.neutral },
  ];
  
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        Color Palette
      </Typography>
      {colorGroups.map((group) => (
        <Box key={group.name} sx={{ marginBottom: 3 }}>
          <Typography variant="h4" sx={{ marginBottom: 1 }}>
            {group.name}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {Object.entries(group.colors).map(([shade, color]) => (
              <Box
                key={shade}
                sx={{
                  width: 60,
                  height: 60,
                  backgroundColor: color,
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: tokens.colors.border.default,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: ['50', '100', '200', '300'].includes(shade) 
                    ? tokens.colors.text.primary 
                    : tokens.colors.text.inverse,
                }}
              >
                {shade}
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

// Example 5: Typography showcase
const TypographyShowcase = () => {
  const tokens = useTokens();
  
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        Typography Scale
      </Typography>
      {Object.entries(tokens.typography.fontSize).map(([size, value]) => (
        <Typography
          key={size}
          sx={{
            fontSize: value,
            marginBottom: 1,
            color: tokens.colors.text.primary,
          }}
        >
          {size.toUpperCase()}: The quick brown fox jumps over the lazy dog ({value}px)
        </Typography>
      ))}
    </Box>
  );
};

// Main component showcasing all examples
const TokenUsageExamples = () => {
  const tokens = useTokens();
  
  return (
    <Box
      sx={{
        backgroundColor: tokens.colors.surface.background,
        minHeight: '100vh',
        padding: tokens.spacing.xl,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          marginBottom: tokens.spacing.xl,
          color: tokens.colors.text.primary,
        }}
      >
        Design Tokens Usage Examples
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Styled Component Example */}
        <StyledCard>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Styled Component Example
            </Typography>
            <Typography variant="body1">
              This card uses tokens in a styled component definition.
            </Typography>
          </CardContent>
        </StyledCard>
        
        {/* SX Prop Example */}
        <SxExample />
        
        {/* Custom Hook Example */}
        <HookExample />
        
        {/* Color Palette */}
        <ColorPalette />
        
        {/* Typography Showcase */}
        <TypographyShowcase />
        
        {/* Spacing Examples */}
        <Box
          sx={{
            backgroundColor: tokens.colors.surface.paper,
            padding: tokens.spacing.lg,
            borderRadius: tokens.borderRadius.md,
            border: `1px solid ${tokens.colors.border.default}`,
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Spacing Scale
          </Typography>
          {Object.entries(tokens.spacing).map(([size, value]) => (
            <Box key={size} sx={{ marginBottom: 2 }}>
              <Typography variant="body2" sx={{ marginBottom: 0.5 }}>
                {size.toUpperCase()}: {value}px
              </Typography>
              <Box
                sx={{
                  height: 20,
                  width: value,
                  backgroundColor: tokens.colors.primary[500],
                  borderRadius: tokens.borderRadius.sm,
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TokenUsageExamples;
