<script setup>
import { ref, watch, defineProps } from "vue";

const props=defineProps({
  id: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: [String, Object],
    text: String,
    class: String,
    default: () => ({
      class: "",
    }),
  },
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
  },
  error: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  inputClass: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  minlength:{
    type:String,
  },
  maxlength:{
    type:String,
  },
  pattern:{
    type:String,
  },
  title:{
    type:String,
  }
});
const emit = defineEmits(["update:modelValue", "validation"]);

const isValid = ref(null);

function validate() {
  let inputEl = document.getElementById(props.id);
  if (!inputEl) return;

  const isValidInput = inputEl.checkValidity();
  isValid.value = isValidInput;
  emit("validation", isValidInput);
}

watch(() => props.modelValue, () => {
  validate();
});

function onInput(event) {
  emit("update:modelValue", event.target.value);
  validate();
}

function getClasses(size, success, error) {
  let sizeValue, isValidValue;

  sizeValue = size && `form-control-${size}`;

  if (error) {
    isValidValue = "is-invalid";
  } else if (success) {
    isValidValue = "is-valid";
  } else {
    isValidValue = "";
  }

  return `${sizeValue} ${isValidValue}`;
}



</script>
<template>
  <div class="input-group">
    <label v-if="label" :class="label.class">{{
      typeof label == "string" ? label : label.text
    }}</label>
    <span v-if="icon" class="input-group-text"
      ><i class="fas" :class="`fa-${icon}`" aria-hidden="true"></i
    ></span>
    <input
      :id="id"
      :type="type"
      class="form-control"
      :class="[getClasses(size, success, error), inputClass, isValid === true ? 'is-valid' : isValid === false ? 'is-invalid' : '']"
      :value="modelValue"
      :placeholder="placeholder"
      :isRequired="required"
      :disabled="disabled"
      :minlength="minlength"
      :maxlength="maxlength"
      :required="required"
      :pattern="pattern"
      :title="title"
      @input="onInput"
    />
  </div>
</template>
