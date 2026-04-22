export type SocialLink = {
  label: string
  href: string
  handle?: string
}

export type ProfileBasic = {
  nameJa: string
  nameKana: string
  nameEn: string
  location: string
  yearsOfExperience: string
  techSummary: string
  github: string
}

export type ExperienceSection = {
  heading: string
  body: string
}

export type EmploymentType = '正社員' | '業務委託'

export type ExperienceProject = {
  index: number
  title: string
  company: string
  period: string
  employmentType: EmploymentType
  role: string
  team: string
  stack: string[]
  overview?: string
  scope?: string
  architecture?: string
  sections: ExperienceSection[]
  phases: string[]
}

export type LinkItem = {
  label: string
  href: string
  description?: string
}

export const profile: ProfileBasic = {
  nameJa: '竹ノ内 愛斗',
  nameKana: 'たけのうち ちかと',
  nameEn: 'Chikato Takenouchi',
  location: '福岡県',
  yearsOfExperience: '約6年',
  techSummary: 'iOS（約6年） / Flutter（約2年） / React Native（約1年）',
  github: 'https://github.com/Take111',
}

export const headline =
  'モバイルアプリ開発を約6年。技術選定・設計判断・チーム改善まで一貫してリードできるテックリード／技術責任者。'

export type CareerPhase = {
  period: string
  type: '正社員' | '業務委託'
  note: string
}

export const careerPhases: CareerPhase[] = [
  {
    period: '2019.10 — 2022.12',
    type: '正社員',
    note: 'Moshbit. → ビットキー → ヤマップ',
  },
  {
    period: '2023.01 — 現在',
    type: '業務委託',
    note: 'フリーランスとして複数案件を並走',
  },
]

export const summary = [
  'モバイルアプリ開発を約6年経験してきました。iOSネイティブ（UIKit, SwiftUI, RxSwift, Combine）を中心に、Flutter、React Nativeでの開発経験があります。テックリード／技術責任者として、技術選定・設計判断・チーム改善までを一貫してリードできることが強みです。',
  '開発者・事業に並走しながらセキュリティを担保できる人材を志向しており、モバイルアプリ開発で培った実務経験を基盤に、CI/CDへのセキュリティ組み込みやクラウドインフラまで、一気通貫でセキュリティを見られる人材を目指しています。現在はBSCP（Burp Suite Certified Practitioner）取得に向けてPortSwigger Web Security Academyで体系的に学習中です。',
  '直近ではReact Native + GCPの案件において、アプリケーションから課金基盤・CI/CD・データ分析基盤の設計・構築までを担当し、アプリケーションレイヤーからインフラまで幅広く携わってきました。',
  '開発環境の改善も自発的に行っています。過去にはSwiftLint、Periphery、Fastlaneなどを提案導入し、コード品質向上やリリース作業の効率化に貢献しました。また、テスト文化の構築やチーム運営の仕組みづくりなど、チーム全体の生産性と品質を底上げする取り組みも積極的に行っています。',
  '最近はAI駆動開発にも取り組んでおり、Cursor・Claude Codeの活用や、CIへのAIコードレビュー組み込みなど、少人数でも高い生産性を出せる仕組みづくりを行っています。',
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Take111', handle: '@Take111' },
  { label: 'Qiita', href: 'https://qiita.com/maxmaxastea', handle: '@maxmaxastea' },
  { label: 'Zenn', href: 'https://zenn.dev/chikato', handle: '@chikato' },
]

export const personalApps: LinkItem[] = [
  {
    label: '個人開発アプリ (App Store)',
    href: 'https://apple.co/3Z3iXDI',
    description: 'iOSアプリ',
  },
]

export const skillCategories: { label: string; items: string[] }[] = [
  {
    label: 'iOS / Apple',
    items: ['Swift', 'UIKit', 'SwiftUI', 'RxSwift', 'Combine', 'XCTest', 'Xcode Cloud'],
  },
  {
    label: 'Cross Platform',
    items: ['Flutter', 'Riverpod', 'React Native', 'Expo'],
  },
  {
    label: 'Backend / Cloud',
    items: ['TypeScript', 'GCP', 'Firestore', 'Cloud Functions', 'BigQuery', 'AWS'],
  },
  {
    label: 'DevOps / Quality',
    items: [
      'GitHub Actions',
      'Bitrise',
      'CircleCI',
      'EAS',
      'Fastlane',
      'SwiftLint',
      'Periphery',
      'Maestro',
    ],
  },
  {
    label: 'Security (学習中)',
    items: ['Burp Suite', 'PortSwigger Web Security Academy', 'BSCP 取得準備中'],
  },
  {
    label: 'AI Driven Dev',
    items: ['Cursor', 'Claude Code', 'Figma MCP', 'AI Code Review on CI'],
  },
]

export const projects: ExperienceProject[] = [
  {
    index: 1,
    title: 'React Native AIチャットアプリ 新規開発',
    company: '株式会社Moshbit.',
    period: '2025年4月 — 現在',
    employmentType: '業務委託',
    role: '技術責任者（技術選定・設計の意思決定権限を持ち、0→1開発を推進）',
    team: 'エンジニア 2名 + PdM',
    stack: [
      'React Native (Expo)',
      'TypeScript',
      'GCP',
      'Firestore',
      'Cloud Functions',
      'BigQuery',
      'RevenueCat',
    ],
    overview:
      'ベンチャーの資金・リソース制約下で、エンジニア2名＋PdMの最小チーム体制でのプロダクト開発。限られたリソースで早期に市場検証可能なプロダクトをリリースする必要があった。',
    sections: [
      {
        heading: '技術選定の方針',
        body: '少人数チームで短期リリースを実現するため、TypeScript統一によるAIツール効率の最大化、CI/CDへのAIコードレビューやFigma MCPによる省力化、ベータ版の不確実性を考慮したBigQuery（従量課金）／RevenueCat（実装速度重視）採用を方針とした。',
      },
      {
        heading: 'アーキテクチャ設計と技術選定',
        body: 'DB設計・全体アーキテクチャを単独で意思決定し実装まで完遂。Cloud Functionsによるサーバレスバックエンドを設計・構築し、TypeScriptモノレポ構成で型安全性とAIツール効率を両立。RevenueCatで買い切り型の課金基盤を設計・実装。',
      },
      {
        heading: 'AI駆動開発の基盤構築',
        body: 'Claude Code用のrules/Agentファイル整備によるコード品質の標準化、CIパイプラインへのAIコードレビュー組み込み、Figma MCPによるUI実装の自動生成、チーム全体でAI活用を再現可能にするドキュメント整備を実施。',
      },
      {
        heading: 'データ分析基盤と CI/CD',
        body: 'Firebase ExtensionでFirestore→BigQuery連携、日次KPI自動集計システムを設計・実装。GCPクォータ設定でコスト管理体制を整備。GitHub Actions + EASによる自動ビルド・デプロイ環境も構築。',
      },
      {
        heading: '成果',
        body: '1〜2ヶ月でβリリースを達成。AI駆動開発により通常の3倍以上の生産性を実現し、2名体制で通常4〜5名規模の開発スピードを確保。',
      },
    ],
    phases: ['要件定義', '基本設計', '詳細設計', '実装', '単体テスト', '結合テスト', '保守運用'],
  },
  {
    index: 2,
    title: 'アバターライブ配信アプリ 開発',
    company: '株式会社Moshbit.',
    period: '2024年4月 — 現在',
    employmentType: '業務委託',
    role: 'プログラマ',
    team: 'アプリ 1名 + バックエンド 1名',
    stack: [
      'Swift',
      'UIKit',
      'XCTest',
      'RxSwift',
      'Combine',
      'CocoaPods',
      'Skyway',
      'Unity',
      'AppSync',
    ],
    overview: 'アバターライブ配信アプリ／アバター通話アプリのiOSアプリ開発。',
    architecture: 'MVVM, MVC',
    sections: [
      {
        heading: '安定性改善',
        body: '参画当初、アプリのメモリ使用量が高くクラッシュが多発していた。メモリリーク箇所を複数特定して修正し、アプリの安定性を改善。',
      },
      {
        heading: 'リアーキテクト',
        body: 'サービスリニューアルに向けて、各種技術検証とリアーキテクトを推進中。',
      },
    ],
    phases: ['基本設計', '詳細設計', '実装', '単体テスト', '結合テスト', '保守運用'],
  },
  {
    index: 8,
    title: '歩数アプリ 開発',
    company: 'Ito Technologies',
    period: '2023年7月 — 現在',
    employmentType: '業務委託',
    role: 'プログラマ',
    team: 'iOS 2名 / Android 2名',
    stack: ['Swift', 'UIKit', 'SwiftUI', 'XcodeGen', 'Realm', 'XCTest', 'mockolo'],
    overview: '歩いた歩数に応じて観光地を巡る歩数アプリ（平日夜間・土日に並走）。',
    architecture: 'Clean ArchitectureベースのMVP',
    sections: [
      {
        heading: 'テスト文化の構築（mockolo + Unit Test）',
        body: 'テストが存在しなかったプロジェクトに対し、mockolo導入とXcode CloudによるCI実行環境を構築。チームでテストを書く習慣が定着し、デグレの早期検知が可能に。',
      },
      {
        heading: 'Xcode Cloud導入によるリリース作業の自動化',
        body: '手動アップロードによる属人化を、Xcode Cloud導入で解消。ドキュメント整備と合わせて運用の安定化に貢献。',
      },
      {
        heading: 'Maestro E2Eテスト導入 / リファクタリング',
        body: 'Maestro E2Eテストを導入。CoreMotionを使った歩数取得や、仕様変更でメンテナンス性が落ちていた箇所のリファクタリングも実施。',
      },
    ],
    phases: ['基本設計', '詳細設計', '実装', '単体テスト'],
  },
  {
    index: 3,
    title: '位置情報共有アプリ 開発',
    company: '株式会社LinQ',
    period: '2023年4月 — 2024年3月（11ヶ月）',
    employmentType: '業務委託',
    role: 'プログラマ',
    team: 'アプリ 10名以上',
    stack: ['Swift', 'UIKit', 'SwiftUI', 'XCTest', 'RxSwift', 'Combine', 'SPM'],
    overview: '位置情報共有アプリのiOS開発。',
    architecture: 'MVVM',
    sections: [
      {
        heading: 'UIモダナイゼーション',
        body: 'UIKit / RxSwiftで実装されている箇所のSwiftUI / Combine化と、フルデザインリニューアルに携わった。',
      },
      {
        heading: 'APIパフォーマンス改善・AWS料金削減',
        body: 'API呼び出しの非効率箇所を調査し、バックエンドチームと協力して改善提案を実施。API呼び出しを削減してパフォーマンス向上とAWS使用料金の削減に貢献。',
      },
      {
        heading: 'その他',
        body: 'リリーススケジュールがタイトな際にはビジネスサイドと折衷案を取りつつ実装。並行してリファクタリングやメモリリーク特定も担当。',
      },
    ],
    phases: ['基本設計', '詳細設計', '実装', '単体テスト', '結合テスト', '保守運用'],
  },
  {
    index: 4,
    title: '銀行取引用アプリ 開発',
    company: '株式会社チームラボ',
    period: '2023年1月 — 2023年3月（3ヶ月）',
    employmentType: '業務委託',
    role: 'プログラマ',
    team: 'アプリ 10名',
    stack: [
      'Swift',
      'UIKit',
      'XCTest',
      'RxSwift',
      'SwiftLint',
      'XcodeGen',
      'CocoaPods',
      'Carthage',
      'CircleCI',
    ],
    overview: '銀行取引アプリ（iPad）の開発。',
    architecture: 'MVVM + KMM',
    sections: [
      {
        heading: 'iPad最適化',
        body: 'iOSネイティブで作られているアプリのiPadOS向け最適化プロジェクト。先行してiPhone向けに実装されたものをベースに、iPad向けにUI等を変更。既存メンバーとコミュニケーションを取りつつ実装を推進。',
      },
    ],
    phases: ['基本設計', '詳細設計', '実装', '単体テスト'],
  },
  {
    index: 5,
    title: '登山アプリ 開発',
    company: '株式会社ヤマップ',
    period: '2021年6月 — 2022年12月（1年6ヶ月）',
    employmentType: '正社員',
    role: 'プログラマ',
    team: 'アプリ 4名 / スクラムチーム 6名',
    stack: [
      'Swift',
      'UIKit',
      'XCTest (Nimble + Quick)',
      'RxSwift',
      'Firebase',
      'SwiftLint',
      'Periphery',
      'CocoaPods',
      'Carthage',
      'CircleCI',
    ],
    overview: '登山アプリのiOS設計・実装・保守。',
    architecture: 'MVVM + Repository',
    sections: [
      {
        heading: '機能提案によるユーザー利便性向上',
        body: 'チーム内議論を重ね、ある機能ではスコープ外だった仕様まで含めることを提案しリリースまで遂行。ユーザーから便利になったとの声を頂き、利便性向上に貢献。',
      },
      {
        heading: 'SwiftLint導入によるコードスタイル統一',
        body: 'コード書き方のばらつきによるレビュー負担増を解消するため、SwiftLint導入を提案・既存コード修正含めて導入。コードスタイルが統一されレビュー品質が安定。',
      },
      {
        heading: 'Periphery導入によるコードベース整理',
        body: '使われていないコードによる開発効率低下を解消するため、Peripheryの導入を提案・既存未使用コードの修正を含めて導入。コードベースが整理され開発効率が向上。',
      },
    ],
    phases: ['基本設計', '詳細設計', '実装', '単体テスト', '結合テスト', '保守運用'],
  },
  {
    index: 6,
    title: 'スマートロックiOSアプリ 開発',
    company: '株式会社ビットキー',
    period: '2020年10月 — 2021年5月（6ヶ月）',
    employmentType: '正社員',
    role: 'プログラマ + iOSリーダー兼務',
    team: 'アプリ 6名 / デザイナー 2名',
    stack: [
      'UIKit',
      'Combine',
      'SwiftUI',
      'XCTest (Nimble + Quick)',
      'Firebase',
      'XcodeGen',
      'R.swift',
      'SwiftLint',
      'CocoaPods',
      'SwiftPM',
      'Bitrise',
    ],
    overview: 'スマートロックiOSアプリの開発（BLE通信以外を担当）とiOSチームリーダー兼務。',
    architecture: 'MVVM + UseCase + Repository',
    sections: [
      {
        heading: 'チーム運営体制の構築',
        body: '6名がほぼ同時期に参画しチケット重複が起きていた状況を、2チーム制への再編とチーム単位アサインで解消。週1の設計検討会＋雑談時間でコード品質とコミュニケーションを両立。結果、開発スピードが向上。',
      },
      {
        heading: 'テスト文化の構築',
        body: '外部アドバイザーを招いた勉強会を開催し、テストを書く環境をメンバーと協力して整備。チーム内にテストを書く文化が定着。',
      },
      {
        heading: '開発業務',
        body: 'スマートロックの施錠解錠／鍵の受け渡しを行うアプリのBLE通信以外を担当。デザイナーからのデザインレビュー、業務委託メンバーへの仕様共有も実施。',
      },
    ],
    phases: ['基本設計', '詳細設計', '実装', '単体テスト'],
  },
  {
    index: 7,
    title: 'VTuber通話アプリ 開発',
    company: '株式会社Moshbit.',
    period: '2019年10月 — 2020年10月（1年1ヶ月）',
    employmentType: '正社員',
    role: 'プログラマ',
    team: 'アプリ 2名 / バックエンド 1名 / デザイナー 1名',
    stack: ['Swift', 'UIKit', 'CocoaPods', 'Jenkins', 'SkyWay', 'Unity'],
    overview: 'VTuberと1対1通話が可能な通話アプリ／社内向けアプリの開発。',
    architecture: 'MVC',
    sections: [
      {
        heading: 'Fastlane導入によるリリース作業の効率化',
        body: '属人化していた手動アップロード（毎回約1時間の作業停止）を、Fastlane導入で30分かつ並行作業可能に短縮。ドキュメント整備で属人化も解消。',
      },
      {
        heading: 'FatViewController問題の解消（リアーキテクト）',
        body: 'プロトタイプ状態のまま運用されていた運営側ホーム画面を、ViewModel導入で処理フロー整理＋CollectionView Compositional Layoutで再構築。メンテナンス性を向上。',
      },
      {
        heading: 'ライブ配信機能のプロトタイプ開発',
        body: 'SkyWay × SFUを用いたライブ配信アプリのプロトタイプを1〜2日で作成し、開発方針の早期決定に貢献。',
      },
      {
        heading: '通常業務',
        body: 'エンドユーザー／社内向けiOSアプリの保守・新規機能開発を担当。通話メイン → ライブ配信機能追加へとサービス拡張。',
      },
    ],
    phases: ['基本設計', '詳細設計', '実装', '単体テスト'],
  },
]

export const sideProjects: ExperienceProject[] = [
  {
    index: 9,
    title: '画像合成アプリ 開発',
    company: '自社サービス企業 A',
    period: '2023年2月 — 2023年3月（1ヶ月）',
    employmentType: '業務委託',
    role: '技術アドバイザー',
    team: 'アプリ 2名',
    stack: ['Flutter', 'Riverpod', 'Firebase'],
    overview:
      '画像合成アプリのFlutter開発を技術アドバイザーとして支援。仕様の先行調査と本実装へのアドバイス。',
    sections: [
      {
        heading: '取り組み',
        body: 'Canvasを使った実装を支援。',
      },
    ],
    phases: ['実装'],
  },
  {
    index: 10,
    title: '農業従事者向けアプリ 開発',
    company: '自社サービス企業 B',
    period: '2023年1月 — 2023年6月（6ヶ月）',
    employmentType: '業務委託',
    role: 'プログラマ',
    team: 'アプリ 2名 / デザイナー 1名',
    stack: ['Flutter', 'Riverpod', 'Firebase', 'screen_util'],
    overview: '農業従事者向けアプリのFlutter開発（週16時間で参画）。',
    architecture: 'Riverpod',
    sections: [
      {
        heading: '取り組み',
        body: 'PdMと連携を取りつつ、使いやすいコンポーネント設計を考えながら実装を推進。初Flutter案件ではあったが素早くキャッチアップしリリースまで完遂。',
      },
    ],
    phases: ['基本設計', '詳細設計', '実装', '単体テスト'],
  },
  {
    index: 11,
    title: '親子メッセージアプリ 開発',
    company: '自社サービス企業 C',
    period: '2021年6月 — 2022年6月（1年）',
    employmentType: '業務委託',
    role: 'プログラマ',
    team: 'アプリ 4名 / デザイナー 1名',
    stack: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'XCTest (Nimble + Quick)',
      'Combine',
      'SwiftLint',
      'XcodeGen',
      'SwiftSnapshotTesting',
      'Sourcery',
      'Swinject',
      'CocoaPods',
      'SwiftPM',
      'Bitrise',
    ],
    overview: '親子で使えるメッセージアプリのiOS開発（週16時間で参画）。',
    architecture: 'SwiftUI + MVVM + UseCase + Repository',
    sections: [
      {
        heading: 'ネイティブ化プロジェクト',
        body: 'React Native製アプリのネイティブ化を担当。先行実装済みのAndroid版から仕様を読み取りつつ、SwiftUI独特の制約も鑑みて画面仕様を他エンジニア・デザイナーと協力して検討。',
      },
      {
        heading: 'SnapshotTestingによるQA工数の大幅削減',
        body: 'iPhone全端末の画面崩れ確認を手動で行うとQA工数が膨大だった課題を、SwiftSnapshotTesting × Sourceryで自動化。Previewのスナップショットを自動撮影し、QA工数を大幅削減。',
      },
    ],
    phases: ['基本設計', '詳細設計', '実装', '単体テスト'],
  },
]
