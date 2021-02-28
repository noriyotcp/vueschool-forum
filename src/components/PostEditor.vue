<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea
          v-model="text"
          id="thread_content"
          class="form-input"
          name="content"
          rows="8"
          cols="140"
        ></textarea>
      </div>

      <div class="form-actions">
        <button class="btn btn-blue" type="submit" name="Submit Post">
          Submit Post
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostEditor',
  props: {
  },
  data () {
    return {
      text: ''
    };
  },
  methods: {
    save () {
      const postId = 'gggg' + Math.random();
      const post = {
        id: postId,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
      };

      this.$emit('save', { post });
      this.text = '';
    }
  }
};
</script>

<style scoped>
</style>
