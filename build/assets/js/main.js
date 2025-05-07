// เมื่อโหลดหน้าเสร็จ
document.addEventListener("DOMContentLoaded", function () {
  // ฟังก์ชันสร้าง Modal
  function createContactModal() {
    const modalHTML = `
<div class="modal fade" id="contactUsModal" tabindex="-1" aria-labelledby="contactUsModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    
    <div class="modal-content p-0" style="border-radius: 1rem; overflow: hidden;">
    <button type="button" class="btn-closed" data-bs-dismiss="modal" aria-label="Close">
         <i class="ti-close"></i>
    </button>
      <div class="modal-body px-3 py-0">
        <div class="row custom-box-contact-us shadow justify-content-around">
          <div class="col-md-5 p-0">
            <div class="contact-us-form bg-white rounded p-4">
              <h2 class="mb-3">Contact us</h2>
              <h6>Let’s start your own brokerage with us.</h6>
              <form id="contactFormModal" class="contact-us-form mt-4">
                <div class="form-row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control rounded-3" name="contact_name"
                                                placeholder="Contact name" required="required">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <select class="form-select rounded-3" name="business_type"
                                                style="border: .0625rem solid #D1D3E0;height: 45px;">
                                                <option value="">Select business type</option>
                                                <option value="SME">SME</option>
                                                <option value="Startup">Startup</option>
                                                <option value="Enterprise Businesses">Enterprise Businesses</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <input type="email" class="form-control rounded-3" name="email"
                                                placeholder="email" required="required">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="input-group">

                                            <select
                                                class="form-select selectpicker select-country-code for-modal rounded-3"
                   name="country_code" data-live-search="true" style="max-width: 300px;">
                                                <option value="+1"
                                                    data-content="<img src='https://flagcdn.com/w40/us.png' class='flag-icon'> <span class='name-country'>United States</span>&nbsp;(+1)">
                                                    US</option>
                                                <option value="+44"
                                                    data-content="<img src='https://flagcdn.com/w40/gb.png' class='flag-icon'> <span class='name-country'>United Kingdom</span>&nbsp;(+44)">
                                                    GB</option>
                                                <option value="+61"
                                                    data-content="<img src='https://flagcdn.com/w40/au.png' class='flag-icon'> <span class='name-country'>Australia</span>&nbsp;(+61)">
                                                    AU</option>
                                                <option value="+81"
                                                    data-content="<img src='https://flagcdn.com/w40/jp.png' class='flag-icon'> <span class='name-country'>Japan</span>&nbsp;(+81)">
                                                    JP</option>
                                                <option value="+82"
                                                    data-content="<img src='https://flagcdn.com/w40/kr.png' class='flag-icon'> <span class='name-country'>South Korea</span>&nbsp;(+82)">
                                                    KR</option>
                                                <option value="+66" selected
                                                    data-content="<img src='https://flagcdn.com/w40/th.png' class='flag-icon'> <span class='name-country'>Thailand</span>&nbsp;(+66)">
                                                    TH</option>
                                                <option value="+86"
                                                    data-content="<img src='https://flagcdn.com/w40/cn.png' class='flag-icon'> <span class='name-country'>China</span>&nbsp;(+86)">
                                                    CN</option>
                                                <option value="+852"
                                                    data-content="<img src='https://flagcdn.com/w40/hk.png' class='flag-icon'> <span class='name-country'>Hong Kong</span>&nbsp;(+852)">
                                                    HK</option>
                                                <option value="+49"
                                                    data-content="<img src='https://flagcdn.com/w40/de.png' class='flag-icon'> <span class='name-country'>Germany</span>&nbsp;(+49)">
                                                    DE</option>
                                                <option value="+33"
                                                    data-content="<img src='https://flagcdn.com/w40/fr.png' class='flag-icon'> <span class='name-country'>France</span>&nbsp;(+33)">
                                                    FR</option>
                                                <option value="+39"
                                                    data-content="<img src='https://flagcdn.com/w40/it.png' class='flag-icon'> <span class='name-country'>Italy</span>&nbsp;(+39)">
                                                    IT</option>
                                                <option value="+34"
                                                    data-content="<img src='https://flagcdn.com/w40/es.png' class='flag-icon'> <span class='name-country'>Spain</span>&nbsp;(+34)">
                                                    ES</option>
                                                <option value="+7"
                                                    data-content="<img src='https://flagcdn.com/w40/ru.png' class='flag-icon'> <span class='name-country'>Russia</span>&nbsp;(+7)">
                                                    RU</option>
                                                <option value="+971"
                                                    data-content="<img src='https://flagcdn.com/w40/ae.png' class='flag-icon'> <span class='name-country'>United Arab Emirates</span>&nbsp;(+971)">
                                                    AE</option>
                                                <option value="+91"
                                                    data-content="<img src='https://flagcdn.com/w40/in.png' class='flag-icon'> <span class='name-country'>India</span>&nbsp;(+91)">
                                                    IN</option>
                                                <option value="+63"
                                                    data-content="<img src='https://flagcdn.com/w40/ph.png' class='flag-icon'> <span class='name-country'>Philippines</span>&nbsp;(+63)">
                                                    PH</option>
                                                <option value="+62"
                                                    data-content="<img src='https://flagcdn.com/w40/id.png' class='flag-icon'> <span class='name-country'>Indonesia</span>&nbsp;(+62)">
                                                    ID</option>
                                                <option value="+60"
                                                    data-content="<img src='https://flagcdn.com/w40/my.png' class='flag-icon'> <span class='name-country'>Malaysia</span>&nbsp;(+60)">
                                                    MY</option>
                                                <option value="+65"
                                                    data-content="<img src='https://flagcdn.com/w40/sg.png' class='flag-icon'> <span class='name-country'>Singapore</span>&nbsp;(+65)">
                                                    SG</option>
                                                <option value="+95"
                                                    data-content="<img src='https://flagcdn.com/w40/mm.png' class='flag-icon'> <span class='name-country'>Myanmar</span>&nbsp;(+95)">
                                                    MM</option>
                                                <option value="+84"
                                                    data-content="<img src='https://flagcdn.com/w40/vn.png' class='flag-icon'> <span class='name-country'>Vietnam</span>&nbsp;(+84)">
                                                    VN</option>
                                                <option value="+855"
                                                    data-content="<img src='https://flagcdn.com/w40/kh.png' class='flag-icon'> <span class='name-country'>Cambodia</span>&nbsp;(+855)">
                                                    KH</option>
                                                <option value="+856"
                                                    data-content="<img src='https://flagcdn.com/w40/la.png' class='flag-icon'> <span class='name-country'>Laos</span>&nbsp;(+856)">
                                                    LA</option>
                                            </select>


                                            <input type="text" class="form-control rounded-3" name="phone"
                                                placeholder="Enter phone number">
                                        </div>
                                    </div>
                                      <div class="col-12 mt-3">
                                        <div class="form-group">
                                            <div class="d-flex align-items-center justify-content-between mb-1"
                                                style="font-size: 13px;">
                                                <span style="color:  #75809D;">Optional</span>
                                                <span id="askPopover" tabindex="0" class="d-inline-block"
                                                    style="color: #1492E6; text-decoration: underline; cursor: pointer;">
                                                    What You Can Ask
                                                </span>
                                            </div>
                                            <textarea  name="message" class="form-control rounded-3"
                                                placeholder="Message" rows="3"></textarea>
                                        </div>
                                    </div>
         
                                    <div class="col-12">
                                        <div class="form-group rounded-3" style="display: flex;
                                        flex-direction: row;
                                        align-items: center;
                                        justify-content: space-between;
                                        padding: 10px;
                                        border: .0625rem solid #D1D3E0;
                                        padding-left: 40px;">
                                            <div class="">
                                                <input type="checkbox" class="form-check-input"
                                                    name="notRobot">
                                                <label class="form-check-label ml-2" style="color: #75809D;"
                                                   >I'm not a
                                                    robot</label>
                                            </div>
                                            <div class="">
                                                <img src="assets/img/RecaptchaLogo.svg.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                  <div class="col-12 d-flex justify-content-between align-items-center">
                    <span style="text-decoration: underline; font-size: 0.875rem; color: #75809D;">Privacy - Terms</span>
                    <button type="submit" class="btn btn-secondary rounded-3" 
                        style="background: var(--redges-color-2);width: 130px;height: 40px;font-size: 18px;display: flex;align-items: center;justify-content: center;">
                    Send</button>
                  </div>
                  
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-7 d-flex justify-content-center align-items-center" style="background: url('assets/img/contact-us/contact-us-footer.png') no-repeat center center / cover; margin-right: -2px;">
            <div class="contact-us-content text-center text-white">
              <h1 style="font-size: 5.25rem;">Unlock</h1><br>
              <h2 style="font-size: 3.5rem; line-height: 2;">Your Business<br>Potential<br>With Us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
    // ใส่เข้าไปใน div
    document.getElementById("contactModalContainer").innerHTML = modalHTML;

    // เปิด Modal
    const myModal = new bootstrap.Modal(
      document.getElementById("contactUsModal")
    );
    myModal.show();

    // ✅ ผูก Popover หลังจาก modal ถูก inject แล้ว
    const askEl = document.querySelector("#contactUsModal #askPopover");

    if (askEl) {
      new bootstrap.Popover(askEl, {
        html: true,
        trigger: "focus",
        placement: "right", // กำหนดให้เริ่มที่ขวา
        fallbackPlacements: ["left"], // ถ้าแสดงด้านขวาไม่ได้ ให้แสดงด้านซ้ายเท่านั้น
        // title: 'Suggestion Questions',
        content: `
          <h6>General Inquiries</h6>
          <ul>
            <li>I’d like to learn more about your services. Can you provide an overview?</li>
            <li>Do you offer free consultations or demos for your software solutions?</li>
            <li>How can I request a proposal for my business?</li>
          </ul>
          <h6>Product & Service-Related Questions</h6>
          <ul>
            <li>What types of financial technology solutions do you offer?</li>
            <li>Can your software be customized to fit my company’s needs?</li>
            <li>Do you provide API integrations with third-party services?</li>
          </ul>
          <h6>Pricing & Payment</h6>
          <ul>
            <li>How much do your services cost?</li>
            <li>Are there any additional fees for software updates or maintenance?</li>
            <li>Do you offer subscription-based pricing or onetime payments?</li>
          </ul>
        `,
      });
    }


    // ต้อง init selectpicker หลัง inject
    $(".selectpicker").selectpicker();

    // ต้อง init validate หลัง inject
    $("#contactFormModal").validate({
      rules: {
        contact_name: { required: true },
        business_type: { required: true },
        email: { required: true, email: true },
        country_code: { required: true },
        phone: {
          required: true,
          minlength: 6,
          maxlength: 15,
        },
        notRobot: { required: true },
      },
      messages: {
        contact_name: { required: "Please enter your name" },
        business_type: { required: "Please select your business type" },
        email: {
          required: "Please enter your email",
          email: "*กรุณากรอกทีอยู่อีเมลให้ถูกต้อง เช่น user@example.com",
        },
        country_code: { required: "Please select country code" },
        phone: {
          required: "Please enter your phone number",
          digits: "Please enter only numbers",
          minlength: "Phone number must be at least 6 digits",
          maxlength: "Phone number must not exceed 15 digits",
        },
        notRobot: { required: "Please confirm you're not a robot" },
      },
      errorClass: "is-invalid",
      validClass: "is-valid",
      errorPlacement: function (error, element) {
        if (element.attr("type") == "checkbox") {
          error.insertAfter(element.next("label"));
        } else {
          error.insertAfter(element);
        }
      },
    });

    // **  submit form handler  **
    // submit form handler
    $(document).on("submit", "#contactFormModal", function (e) {
      e.preventDefault();
      if ($(this).valid()) {
        console.log("modal Form is valid");
        let $form = $("#contactFormModal");
        let formData = {
          contact_name: $form.find('input[name="contact_name"]').val(),
          business_type: $form.find('select[name="business_type"]').val(),
          email: $form.find('input[name="email"]').val(),
          country_code: $form.find('select[name="country_code"]').val(),
          phone: $form.find('input[name="phone"]').val(),
          message: $form.find('textarea[name="message"]').val(),
          notRobot: $form.find('input[name="notRobot"]').is(":checked") ? 1 : 0,
        };
        console.log("modal Form Data:", formData);

        // ********* เพิ่ม AJAX ตรงนี้ **********
        $.ajax({
          url: "https://www.ws777.co.th/contact-form-process.php",
          type: "POST",
          data: formData,
          success: function (response) {
            console.log("Response:", response);
            if (response === "success") {
              $("#contactFormModal")[0].reset();
              submitMSG(true);
              myModal.hide();
              setTimeout(() => {
                location.reload();
              }, 1000);
            } else {
              alert("Error: " + response);
            }
          },
          error: function () {
            alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
          },
        });
        // *************************************
      } else {
        console.log("Form is not valid");
      }
    });
  }

  // Event Click ปุ่ม
  document.querySelectorAll(".btn-contact-you-back").forEach((btn) => {
    
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      createContactModal();
    });
  });

  // renderCountrySelect();
});

const askEl = document.getElementById("askPopover");

const popover = new bootstrap.Popover(askEl, {
  html: true,
  trigger: "focus",
  placement: "right", // กำหนดให้เริ่มที่ขวา
  fallbackPlacements: ["left"], // ถ้าแสดงด้านขวาไม่ได้ ให้แสดงด้านซ้ายเท่านั้น
  // title: 'Suggestion Questions',
  content: `
    <h6>General Inquiries</h6>
    <ul>
      <li>I’d like to learn more about your services. Can you provide an overview?</li>
      <li>Do you offer free consultations or demos for your software solutions?</li>
      <li>How can I request a proposal for my business?</li>
    </ul>
    <h6>Product & Service-Related Questions</h6>
    <ul>
      <li>What types of financial technology solutions do you offer?</li>
      <li>Can your software be customized to fit my company’s needs?</li>
      <li>Do you provide API integrations with third-party services?</li>
    </ul>
    <h6>Pricing & Payment</h6>
    <ul>
      <li>How much do your services cost?</li>
      <li>Are there any additional fees for software updates or maintenance?</li>
      <li>Do you offer subscription-based pricing or onetime payments?</li>
    </ul>
  `,
});

function toggleModal() {
  console.log("toggleModal");

  const modal = document.getElementById("customModal");
  modal.classList.toggle("show");
}

function submitMSG(valid) {
  // สร้าง element alert
  let alertBox = $(
    '<div class="message-box d-block" style="position: fixed;top: 80px; z-index: 9999;width: 90%; transform: translateX(5%);"></div>'
  );
  let alertContent = $('<div class="alert"></div>');

  if (valid) {
    alertContent
      .removeClass("alert-danger")
      .addClass("alert-success")
      .text("Form submitted successfully");
  } else {
    alertContent
      .removeClass("alert-success")
      .addClass("alert-danger")
      .text("Found error in the form. Please check again.");
  }

  // เอา alertContent ใส่เข้าไปใน alertBox
  alertBox.append(alertContent);

  // เพิ่ม alertBox เข้า body
  $("body").append(alertBox);

  // ตั้งเวลาให้หายไปใน 3 วินาที
  setTimeout(() => {
    alertBox.fadeOut(300, function () {
      $(this).remove(); // ลบออกจาก DOM
    });
  }, 3000);
}

function renderCountrySelect() {
  // ข้อมูลประเทศแบบ Array
  const countries = [
    { code: "+1", short: "US", flag: "us" },
    { code: "+44", short: "GB", flag: "gb" },
    { code: "+61", short: "AU", flag: "au" },
    { code: "+81", short: "JP", flag: "jp" },
    { code: "+82", short: "KR", flag: "kr" },
    { code: "+66", short: "TH", flag: "th" },
    { code: "+86", short: "CN", flag: "cn" },
    { code: "+852", short: "HK", flag: "hk" },
    { code: "+49", short: "DE", flag: "de" },
    { code: "+33", short: "FR", flag: "fr" },
    { code: "+39", short: "IT", flag: "it" },
    { code: "+34", short: "ES", flag: "es" },
    { code: "+7", short: "RU", flag: "ru" },
    { code: "+971", short: "AE", flag: "ae" },
    { code: "+91", short: "IN", flag: "in" },
    { code: "+63", short: "PH", flag: "ph" },
    { code: "+62", short: "ID", flag: "id" },
    { code: "+60", short: "MY", flag: "my" },
    { code: "+65", short: "SG", flag: "sg" },
    { code: "+95", short: "MM", flag: "mm" },
    { code: "+84", short: "VN", flag: "vn" },
    { code: "+855", short: "KH", flag: "kh" },
    { code: "+856", short: "LA", flag: "la" },
  ];

  // ดึง element select
  const select = document.getElementById("countrySelect");

  // สร้าง options ด้วย loop
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.code;
    option.setAttribute(
      "data-content",
      `<img src="https://flagcdn.com/w40/${country.flag}.png" class="flag-icon"> ${country.short}`
    );
    option.innerHTML = country.short; // ข้อความที่เห็นในตัวเลือก
    if (country.code === "+66") {
      option.selected = true; // เลือกไทย (+66) ไว้เป็น default
    }
    select.appendChild(option);
  });
}

$(document).ready(function () {
  // format เบอร์โทร
  $(document).on("input", 'input[name="phone"]', function () {
    console.log("aaa");

    var phone = $(this).val().replace(/\D/g, "");
    if (phone.length > 3 && phone.length <= 6) {
      phone = phone.replace(/(\d{3})(\d+)/, "$1 $2");
    } else if (phone.length > 6) {
      phone = phone.replace(/(\d{3})(\d{3})(\d+)/, "$1 $2 $3");
    }
    $(this).val(phone);
  });


  // เปิด validate form
  $("#contactFormNew").validate({
    rules: {
      contact_name: { required: true },
      business_type: { required: true },
      email: { required: true, email: true },
      country_code: { required: true },
      phone: {
        required: true,
        // digits: true,
        minlength: 6,
        maxlength: 15,
      },
      notRobot: { required: true },
    },
    messages: {
      contact_name: { required: "Please enter your name" },
      business_type: { required: "Please select your business type" },
      email: {
        required: "Please enter your email",
        email: "*กรุณากรอกทีอยู่อีเมลให้ถูกต้อง เช่น user@example.com",
      },
      country_code: { required: "Please select country code" },
      phone: {
        required: "Please enter your phone number",
        digits: "Please enter only numbers",
        minlength: "Phone number must be at least 6 digits",
        maxlength: "Phone number must not exceed 15 digits",
      },
      notRobot: { required: "Please confirm you're not a robot" },
    },
    errorClass: "is-invalid",
    validClass: "is-valid",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        error.insertAfter(element.next("label"));
      } else {
        error.insertAfter(element);
      }
    },
  });
  // ดัก submit form
  $("#contactFormNew").on("submit", function (e) {
    e.preventDefault(); // กันการ refresh หน้า

    if ($(this).valid()) {
      // เช็ค validate
      console.log("Form is valid");

      // เก็บข้อมูลใส่ object
      let formData = {
        contact_name: $('input[name="contact_name"]').val(),
        business_type: $('select[name="business_type"]').val(),
        email: $('input[name="email"]').val(),
        country_code: $('select[name="country_code"]').val(),
        phone: $('input[name="phone"]').val(),
        message: $('textarea[name="message"]').val(),
        notRobot: $('input[name="notRobot"]').is(":checked") ? 1 : 0,
      };

      console.log("Form Data:", formData);
      $("#contactFormNew")[0].reset();

      // ลบ class validate ออกจาก input, select, textarea
      $("#contactFormNew")
        .find("input, select, textarea")
        .removeClass("is-valid is-invalid");

      // ลบข้อความ error ออก
      $("#contactFormNew").find("label.error").remove();

      // ยิง ajax ไปยังไฟล์ php
      $.ajax({
        url: "https://www.ws777.co.th/contact-form-process.php", //'save.php', // เปลี่ยน URL ตามที่ต้องการ
        type: "POST",
        data: formData,
        // data: "name=" + s + "&email=" + a + "&message=" + n,
        success: function (response) {
          submitMSG(true);
          alert("บันทึกสำเร็จ: " + response);
          setTimeout(() => {
            location.reload();
          }, 1000);
        },
        error: function () {
          alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
        },
      });
    } else {
      console.log("Form is not valid");
    }
  });
});
