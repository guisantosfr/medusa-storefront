<script setup lang="ts">
  const client = useMedusaClient();
  const { product_categories } = await client.productCategories.list();
</script>

<template>
  <div class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl font-bold text-gray-900">Categorias</h2>
        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div v-for="category in product_categories" :key="category.id" class="group relative">
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <nuxt-link :to="`/categorias/${category.id}`">
                  <span class="absolute inset-0" />
                  {{ category.name }}
                </nuxt-link>
              </h3>
              <p class="text-base font-semibold text-gray-900">{{ category.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
