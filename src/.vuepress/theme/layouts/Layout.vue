<template>
  <div class="font-sans" :class="theme">
    <div
      class="theme-container bg-background-primary text-primary"
      :class="pageClasses"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <Navbar
        v-if="shouldShowNavbar"
        :theme="theme"
        @themeChanged="updateTheme"
        @toggle-sidebar="toggleSidebar"
      />

      <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

      <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
        <slot name="sidebar-top" slot="top"/>
        <slot name="sidebar-bottom" slot="bottom"/>
      </Sidebar>

      <Home v-if="$page.frontmatter.home"/>
      <BlogPage v-else-if="$page.frontmatter.blogpage"/>

      <Page v-else :sidebar-items="sidebarItems">
        <slot name="page-top" slot="top"/>
        <slot name="page-bottom" slot="bottom"/>
      </Page>

      <footer class="bg-background-primary text-primary">
      <div class="container mx-auto flex  content-center">
        
          <div></div>
        
        
      </div>
    </footer>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Home from "@theme/components/Home.vue";
import Footer from "@theme/components/Footer.vue";
import BlogPage from "@theme/components/BlogPage.vue";
import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import { resolveSidebarItems } from "../util";
// import Footer from '../components/Footer.vue';

export default {
  components: { Home, BlogPage, Page, Sidebar, Navbar, Footer },

  data() {
    return {
      isSidebarOpen: false,
      theme: ""
    };
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar
        },
        userPageClass
      ];
    }
  },

  mounted() {
    this.theme = localStorage.getItem("theme") || "theme-light";
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
    },
    updateTheme(theme) {
      this.theme = theme;
    },
    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    }
  }
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>



