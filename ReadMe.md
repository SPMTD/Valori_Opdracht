## Opzet Valoris opdracht
# Door niet voldoende beschikbare development tijd wordt in dit document de projectstructuur beschreven

# Structuur
dictionary/
    locators/
        nav-locators.spec.ts
        page1-locators.spec.ts
        page2-locators.spec.ts
    tasks/
        register.spec.ts
        login.spec.ts
        shop-filters.spec.ts
        add-to-cart.spec.ts        
config/
    interface/
        test-results.interface.ts # interface voor test result terugkoppeling
        config.interface.ts
    service-config.spec.ts   # When using Microsoft Azure keyvaults/pipelines -> Interface IConfigurationRoot    
tests/
  example.spec.ts            # Minimal example test  

playwright.config.ts         # Test configuration
appsettings.json             # Project settings
package.json
package-lock.json            # Or yarn.lock / pnpm-lock.yaml

# Onderbouwing
Om locators en tests zo modulair mogelijk op te zetten worden generieke taken geautomatiseerd.
Hieronder vallen voorbeelden zoals inloggen, en iets toevoegen aan het winkel wagentje. Dit zou verder uitgebreid kunnen worden naar verschillende filter taken en navigeren.

