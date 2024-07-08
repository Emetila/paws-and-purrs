import React, { useState } from 'react';
import style from './style.module.css';
import { ReactComponent as Rating } from '../../assets/icon/stars.svg';
import { ReactComponent as Line } from '../../assets/icon/line2.svg';
import { IoMdArrowDropdown } from "react-icons/io";
import { Reviews } from './review';
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

export const DescriptionSection = () => {
    const [percentage, setPercentage] = useState(0);

    const handleChange = (e) => {
        setPercentage(e.target.value);
    };
    const [activeTab, setActiveTab] = useState(0);
    const [tabContents, setTabContents] = useState([
        {
            content: <div className={style.tab1contentbox}>
                <p>Give your pets the cozy retreat they deserve with our Cuddle Cave. Perfect for both cats and
                    dogs, this plush bed provides a sense of security and warmth. The cave design allows your pets
                    to snuggle inside or lounge on top, making it versatile for all seasons. Its durability ensures
                    it can withstand playful pets, while the machine-washable feature makes maintenance a breeze.</p>
                <h3>Specifications:</h3>
                <ul>
                    <li><span>Materials: </span> Polyester outer, sherpa fleece inner</li>
                    <li><span>Dimensions: </span>Small (24" diameter), Medium (30" diameter), Large (36" diameter)</li>
                    <li><span>Care Instructions: </span>Machine washable, tumble dry low</li>
                </ul>
            </div>
        },
        {
            content:
                <div>
                    <ul>
                        <li><span>Luxurious Material: </span> Made from high-quality, soft, and durable fabric.</li>
                        <li><span>Spacious Design: </span>Ample space for your pet to stretch out and snuggle in.</li>
                        <li><span>Easy to Clean: </span>Machine-washable cover for hassle-free maintenance.</li>
                        <li><span>Stylish Look: </span>Complements any home decor with its modern design.</li>
                        <li><span>Secure Environment: </span>Provides a safe and cozy hideaway for anxious pets.</li>
                        <li><span>Durable: </span>Durable exterior for long-lasting use</li>
                        <li><span>Size: </span>Available in multiple sizes to suit different breeds</li>
                    </ul>
                </div>
        },
        {
            content:
                <div>
                    <p>At Paws and Purrs, we want you and your furry friends to be completely satisfied with your purchase.
                        If for any reason you're not happy, we offer a simple return policy:</p>
                    <div>
                        <ul>
                            <li><span>30-Day Return Window:</span>Return any unused, undamaged items within 30 days of delivery for a full refund.</li>
                            <li><span>Easy Process</span> Initiate your return through our online portal or contact our customer service.</li>
                            <li><span>Free Returns:</span>We cover the cost of return shipping for all domestic orders.</li>
                            <li><span>Refund Options</span> Choose between store credit or a refund to your original payment method.</li>
                            <li><span>Exceptions:</span> For hygiene reasons, opened pet food, treats, and used bedding cannot be returned.</li>
                        </ul>
                    </div>
                    <p><span className={style.text}>Note: </span>Custom or personalized items are only returnable if defective</p>
                    <div>
                        <p className={style.text}>Additional Note:</p>
                        <p>For questions about our return policy, please contact our customer service team. We're here to help ensure you and your pets have the best experience with Paws and Purrs.</p>
                    </div>
                </div>
        },
        {
            content:
                <div>
                    <p>We stand behind the quality of our products with our Paws and Purrs Guarantee:</p>
                    <div>
                        <ul>
                            <li><span>90-Day Warranty: </span> All products are covered against defects in materials and workmanship for 90 days from the date of purchase.</li>
                            <li><span>Extended Coverage: </span> Select premium items come with an extended 1-year warranty. Look for the 'Extended Warranty' badge on eligible products.</li>
                            <li><span>What's Covered: </span>We'll repair, replace, or refund any product that doesn't meet our high-quality standards under normal use.</li>
                            <li><span>How to Claim: </span>  Contact our customer service with your order number and a description of the issue. We'll guide you through the process.</li>
                            <li><span>Exclusions: </span> Damage from misuse, accidents, or normal wear and tear is not covered.
                            </li>
                        </ul>
                    </div>
                    <p><span className={style.text}>
                        Our Commitment:</span>If your pet isn't happy, we aren't happy. We're dedicated to ensuring the best for your furry family members.</p>
                    <div>
                        <p className={style.text}>Additional Note: </p>
                        <p>For questions about our return policy, please contact our customer service team. We're here to help ensure you and your pets have the best experience with Paws and Purrs.</p>
                    </div>
                </div>
        },
        {
            content:
                <section className={style.containerbox}>
                    <aside>
                        <div>
                            <h2>Customer Reviews</h2>
                            <div className={style.ratingbox}>
                                <Rating className={style.rating} />
                                <p>290 ratings</p>
                            </div>
                            <div className={style.starcontentbox}>
                                <div className={style.starbox}>
                                    <p>5 star</p>
                                    <div className="percentage-bar-container">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={percentage}
                                            onChange={handleChange}
                                            className="slider"
                                        />
                                        <div className="percentage-bar">
                                            <div
                                                className="percentage-fill"
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>
                                        <div className="percentage-label">{83}%</div>
                                    </div>
                                </div>
                                <div className={style.starbox}>
                                    <p>4 star</p>
                                    <div className="percentage-bar-container">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={percentage}
                                            onChange={handleChange}
                                            className="slider"
                                        />
                                        <div className="percentage-bar">
                                            <div
                                                className="percentage-fill"
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>
                                        <div className="percentage-label">{79}%</div>
                                    </div>
                                </div>
                                <div className={style.starbox}>
                                    <p>3 star</p>
                                    <Line className={style.line3} />
                                    <p>32%</p>
                                </div>
                                <div className={style.starbox}>
                                    <p>2 star</p>
                                    <Line className={style.line2} />
                                    <p>20%</p>
                                </div>
                                <div className={style.starbox}>
                                    <p>1 star</p>
                                    <Line className={style.line1} />
                                    <p>8%</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <article>
                        <div>
                            <div className={style.inputbox}>
                                <p>Filter by</p>
                                <div className={style.dropdown}>
                                    <p>Rating</p>
                                    <IoMdArrowDropdown className={style.dropdownicon} />
                                </div>
                            </div>
                            <div className={style.inputbox}>
                                <p>Sort by</p>
                                <div className={style.dropdown}>
                                    <p>Relevance</p>
                                    <IoMdArrowDropdown className={style.dropdownicon} />
                                </div>
                            </div>
                        </div>
                        <div className={style.products}>
                            {Reviews.map((Reviews) => (
                                <div className={style.productbox}>
                                    <div>
                                        <img className={style.productsimages} src={Reviews.rating} />
                                    </div>
                                    <div className={style.wrap}>
                                        <div className={style.name}>
                                            <img className={style.user} src={Reviews.Image} />
                                            <div className={style.namebox}>
                                                <h5 className={style.name}>{Reviews.name}</h5>
                                                <p className={style.address}>{Reviews.address}</p>
                                            </div>
                                            <h5 className={style.date}>{Reviews.date}</h5>
                                        </div>
                                    </div>
                                    <div className={style.bodybox}>
                                        <p className={style.review}>{Reviews.description}</p>
                                        <div className={style['review-number']}>
                                            <div className={style.reviewnumberbox}>
                                                <BiLike className={style.like} />
                                                <p className={style.likenumber}>{Reviews.likenumber}</p>
                                            </div>
                                            <div className={style.reviewnumberbox}>
                                                <BiDislike className={style.like} />
                                                <p className={style.dislikenumber}>{Reviews.dislikenumber}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </article>
                </section>

        }
    ]);

    const renderContent = () => {
        return <div>{tabContents[activeTab].content}</div>;
    };

    return (
        <div className={style.container}>
            <div className={style['tab-menu']}>
                <button
                    className={activeTab === 0 ? 'active' : ''}
                    onClick={() => setActiveTab(0)}
                >
                    Product Description
                </button>
                <button
                    className={activeTab === 1 ? 'active' : ''}
                    onClick={() => setActiveTab(1)}
                >
                    Key Features
                </button>
                <button
                    className={activeTab === 2 ? 'active' : ''}
                    onClick={() => setActiveTab(2)}
                >
                    Return Policy
                </button>
                <button
                    className={activeTab === 3 ? 'active' : ''}
                    onClick={() => setActiveTab(3)}
                >
                    Warranty
                </button>
                <button
                    className={activeTab === 4 ? 'active' : ''}
                    onClick={() => setActiveTab(4)}
                >
                    Customer Review
                </button>
            </div>
            <div className={style['tab-content']}>{renderContent()}</div>
        </div>
    );
};