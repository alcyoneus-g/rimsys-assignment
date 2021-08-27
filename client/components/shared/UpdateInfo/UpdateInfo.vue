<template>
  <div>
    <button
      class="bg-gray-700 text-white p-3 rounded-full shadow-xl fixed bottom-7 left-7"
      @click="showModal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    </button>

    <div
      v-if="isModalInDom"
      class="z-20 fixed bg-black bg-opacity-60 inset-0 flex justify-center items-center opacity-0 overlay"
      :class="{ 'overlay--active': isModalOpen }"
      @click="clickOnOverlay"
    >
      <div
        class="modal outline-none rounded-md overflow-auto bg-white max-w-xl w-full shadow-lg opacity-0"
        :class="{ 'modal--active': isModalOpen }"
      >
        <div class="p-6 flex justify-between items-center">
          <h3 class="font-semibold text-lg capitalize">
            Reminder
          </h3>

          <button class="px-1 m-0" @click="closeModal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="p-6 pt-0">
          You can update skills and projects in this page by clicking on CTA
          below each section.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      isModalOpen: false,
      isModalInDom: false,
    }
  },

  methods: {
    showModal() {
      this.isModalInDom = true
      this.isModalOpen = true
    },

    closeModal() {
      this.isModalOpen = false

      setTimeout(() => {
        this.isModalInDom = false
      }, 400)
    },

    clickOnOverlay(e) {
      if (e.target.classList.contains('overlay')) this.closeModal()
    },
  },
})
</script>

<style scoped>
.overlay {
  animation: overlayClose 0.25s ease-in forwards;
}

.overlay--active {
  animation: overlayOpen 0.35s ease-out forwards;
}

.modal {
  max-height: calc(100% - 5rem);
  animation: modalClose 0.25s ease-in forwards;
}

.modal--active {
  animation: modalOpen 0.35s ease-out forwards;
  animation-delay: 0.08s;
}

@keyframes modalClose {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(0.9);
  }
}

@keyframes modalOpen {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes overlayOpen {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes overlayClose {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
