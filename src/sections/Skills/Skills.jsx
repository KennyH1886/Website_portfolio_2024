import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      {/* Category 1 */}
      <h2 className={styles.categoryTitle}>Core Languages & Tools</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Pycharm" />
        <SkillList src={checkMarkIcon} skill="Google Collab" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Linux" />
        <SkillList src={checkMarkIcon} skill="Swift" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="PuzzleScript" />
        <SkillList src={checkMarkIcon} skill="Kubernetes" />
      </div>

      <hr />

      {/* Category 2 */}
      <h2 className={styles.categoryTitle}>Frameworks & Libraries</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Streamlit" />
        <SkillList src={checkMarkIcon} skill="VS Code" />
        <SkillList src={checkMarkIcon} skill="Jupyter" />
        <SkillList src={checkMarkIcon} skill="flutter" />
        <SkillList src={checkMarkIcon} skill="Net Beans" />
        <SkillList src={checkMarkIcon} skill="Eclipse" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="LLMS" />
      </div>

      <hr />

      {/* Category 3 */}
      <h2 className={styles.categoryTitle}>Other Tools</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="AutoCad" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="diverse array of APIs" />
        <SkillList src={checkMarkIcon} skill="Pinecone" />
        <SkillList src={checkMarkIcon} skill="ChromaDB" />
        <SkillList src={checkMarkIcon} skill="RAG" />
        <SkillList src={checkMarkIcon} skill="LLMS" />
      </div>
    </section>
  );
}

export default Skills;
