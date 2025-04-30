console.log("banana");

const blogPosts = [
    {
      id:1,
      image: `assets/img/blog/blog-01.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 1`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:2,
      image: `assets/img/blog/blog-02.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 2`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:3,
      image: `assets/img/blog/blog-03.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 3`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:4,
      image: `assets/img/blog/blog-04.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 4`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:5,
      image: `assets/img/blog/blog-01.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 5`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:6,
      image: `assets/img/blog/blog-02.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 6`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:7,
      image: `assets/img/blog/blog-03.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 7`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:8,
      image: `assets/img/blog/blog-04.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 8`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:9,
      image: `assets/img/blog/blog-01.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 9`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:10,
      image: `assets/img/blog/blog-02.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 10`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:11,
      image: `assets/img/blog/blog-03.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 11`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:12,
      image: `assets/img/blog/blog-04.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 12`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:13,
      image: `assets/img/blog/blog-01.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 13`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:14,
      image: `assets/img/blog/blog-02.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 14`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:15,
      image: `assets/img/blog/blog-03.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 15`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
    {
      id:16,
      image: `assets/img/blog/blog-04.jpg`,
      title: `UGC (User-Generated Content) พลังรีวิวจากลูกค้าจริง 16`,
      sub_title: `การให้ลูกค้าเป็นกระบอกเสียงให้แบรนด์ของคุณ อาจส่งผลดีมากกว่าการโฆษณาแบบเดิม ๆ UGC หรือเนื้อหาที่ผู้ใช้สร้างขึ้นเอง เช่น รีวิวสินค้า วิดีโอแกะกล่อง หรือโพสต์จากลูกค้าจริง สามารถสร้างความน่าเชื่อถือ และกระตุ้นการตัดสินใจซื้อได้ดีกว่าที่คุณคิด`,
    },
  ];

// จำนวนของโพสต์ต่อหน้า
const postsPerPage = 8;
// หน้าปัจจุบัน
let currentPage = 1;

function renderPosts(page) {
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;
  const currentPosts = blogPosts.slice(start, end);

  const blogContainer = document.getElementById("blog-container");
  blogContainer.innerHTML = "";

  currentPosts.forEach((post) => {

    const postHTML = `
      <div class="col-12 col-md-6 col-lg-4 col-xl-3  mb-4 mb-md-4 mb-4">
        <div class="card bg-white border-variant-soft shadow-sm bg-white">
            <div class="blog-img position-relative">
               <img src="${post.image}" class="card-img-top rounded-top" alt="${post.title}">
            </div>
            <div class="card-body">
                <h3 class="h6 card-title mt-3">${post.title}<span class="icon icon-xs font-small "><i class="ti-star"></i></span></h3>
                <p class="card-text">${post.sub_title}</p>
                <a class="link-with-icon text-default font-small font-weight-bold read-more" target="_blank">Read more 
                        <span> <i class="fas fa-angle-right"></i></span>
                </a>
            </div>
        </div>
     </div>
    `;

    blogContainer.innerHTML += postHTML;
  });
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    const prevBtn = `
      <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
        <a class="page-link border border-variant-redges rounded"  onclick="changePage(${currentPage - 1})">Previous</a>
      </li>
    `;
    pagination.innerHTML += prevBtn;

    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = `
        <li class="page-item ${currentPage === i ? 'active' : ''}">
          <a class="page-link border border-variant-redges rounded"  onclick="changePage(${i})">${i}</a>
        </li>
      `;
      pagination.innerHTML += pageBtn;
    }

    const nextBtn = `
      <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
        <a class="page-link border border-variant-redges rounded"  onclick="changePage(${currentPage + 1})">Next</a>
      </li>
    `;
    pagination.innerHTML += nextBtn;
  }

  function changePage(page) {
    console.log('changePage');
    
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderPosts(currentPage);
    renderPagination();
  }

// // เริ่มต้น
renderPosts(currentPage);
renderPagination();


