<script lang="ts">
import { ref } from "vue";
import type { FormInstance } from "element-plus";

export default {
  data() {
    return {
      form_data: { login: "", password: "", repeated_password: "" },
      is_registration: false,
      formRef: ref<FormInstance | null>(null),
      rules: {
        login: [
          {
            required: true,
            message: "Please input login",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "Length should be 3 to 10",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input password",
            trigger: "blur",
          },
          {
            min: 5,
            message: "Length should above 5",
            trigger: "blur",
          },
        ],
        repeated_password: [
          {
            required: true,
            message: "Please input password again",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Length should above 5",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    is_button_disabled() {
      return true;
    },
  },
  watch: {
    is_registration() {
      this.form_data.repeated_password = "";
    },
    form_data: {
      handler() {
        if (!this.formRef) {
          console.log("no obj");
          return;
        }
        this.formRef.validate((valid, fields) => {
          if (valid) {
            console.log("submit!");
          } else {
            console.log("error submit!", fields);
          }
        });
      },
      deep: true,
    },
  },
  mounted() {
    this.formRef = ref<FormInstance | null>(null);
  },
};
</script>

<template>
  <div class="auth_view">
    <el-form
      ref="formRef"
      :model="form_data"
      label-position="top"
      :rules="rules"
    >
      <el-radio-group v-model="is_registration" aria-label="label position">
        <el-radio-button :value="false">login</el-radio-button>
        <el-radio-button :value="true">sign up</el-radio-button>
      </el-radio-group>
      <el-form-item label="Login" prop="login">
        <el-input
          v-model="form_data.login"
          placeholder="Please input password"
          clearable
          validate-event
        />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          v-model="form_data.password"
          type="password"
          placeholder="Please input password"
          show-password
          clearable
        />
      </el-form-item>
      <el-form-item
        label="Repeat password"
        v-if="is_registration"
        prop="repeated_password"
      >
        <el-input
          v-model="form_data.repeated_password"
          type="password"
          placeholder="Please input password"
          show-password
          clearable
        />
      </el-form-item>
      <el-button type="primary" round :disabled="is_button_disabled">
        Do it
      </el-button>
    </el-form>
  </div>
</template>

<style scoped>
.el-input {
  border-radius: 20px;
}
.el-radio-group {
  margin-bottom: 20px;
}
.el-form {
  padding: 20px;
  border: 1px solid var(--el-border-color);
  box-shadow: var(--el-box-shadow-dark);
  border-radius: 20px;

  width: 300px;
}
</style>
